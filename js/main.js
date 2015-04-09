(function(){
    "use strict";

    function createTable(){
        $("#table-wrapper").handsontable({
            colHeaders: false,
            contextMenu: true,
            afterChange: genPTT,
            afterSetCellMeta: genPTT
        });
    }

    createTable();
})();

function genPTT(){
    var style;
    var styleOption = document.getElementById('style').value;
    if('double' == styleOption) {
        style = {
            horizontal: '═',
            vertical: '║',
            top_left: '╔',
            top_center: '╦',
            top_right: '╗',
            middle_left: '╠',
            middle_center: '╬',
            middle_right: '╣',
            bottom_left: '╚',
            bottom_center: '╩',
            bottom_right: '╝'
        };
    } else if('ascii' == styleOption) {
        style = {
            horizontal: '-',
            vertical: '|',
            top_left: '+',
            top_center: '+',
            top_right: '+',
            middle_left: '+',
            middle_center: '+',
            middle_right: '+',
            bottom_left: '+',
            bottom_center: '+',
            bottom_right: '+'
        };
    } else {
        style = {
            horizontal: '─',
            vertical: '│',
            top_left: '┌',
            top_center: '┬',
            top_right: '┐',
            middle_left: '├',
            middle_center: '┼',
            middle_right: '┤',
            bottom_left: '└',
            bottom_center: '┴',
            bottom_right: '┘'
        };
    }
    var spacePadding = document.getElementById("spacePadding").checked;

    var data = extractData(spacePadding);
    var widths = getWidths(data, spacePadding);
    var heights = getHeights(data, spacePadding);
    var str = "";
    var i, j, k, m, entry, item, offsets, end;
    var typeOption = document.getElementById('type').value;

    // top
    str += generateSeparationLine(widths, style, 'top_left', 'top_center', 'top_right');

    // rows
    for (i = 0; i < heights.length; i++) {
        offsets = [];
        for (j = 0; j < widths.length; j++) {
            if('bottom' == data.arr[i][j].vAlign) {
                offsets[j] = data.arr[i][j].pseudoRows.length - heights[i];
            } else if ('middle' == data.arr[i][j].vAlign) {
                offsets[j] = Math.ceil((data.arr[i][j].pseudoRows.length - heights[i]) / 2);
            } else {
                offsets[j] = 0;
            }
        }

        for (m = 0; m < heights[i]; m++) {
            str += style.vertical;
            for (j = 0; j < widths.length; j++) {
                item = data.arr[i][j];
                if(item.empty) {
                    entry = '';
                } else {
                    entry = item.pseudoRows[m + offsets[j]] || '';
                }
                if('right' == data.arr[i][j].hAlign) {
                    end = widths[j] - entry.length;
                } else if ('center' == data.arr[i][j].hAlign) {
                    end = Math.floor((widths[j] - entry.length) / 2);
                } else {
                    end = 0;
                }
                for (k = 0; k < end; k++) {
                    str += ' ';
                }
                str += entry;
                end = widths[j] - entry.length - end;
                for (k = 0; k < end; k++) {
                    str += ' ';
                }
                if (j < widths.length-1) {
                    str += style.vertical;
                }
            }
            str += style.vertical;
            str += '\n';
        }

        if (('grid' == typeOption && i < heights.length-1) || ('header' == typeOption && i == 0 && i < heights.length-1)) {
            str += generateSeparationLine(widths, style, 'middle_left', 'middle_center', 'middle_right');
        }
    }

    // bottom
    str += generateSeparationLine(widths, style, 'bottom_left', 'bottom_center', 'bottom_right');
    $('#ptt-wrapper').text(str);
}

function extractData(spacePadding){
    var i, j, k, item, lines, w, meta, vAlign, hAlign;
    var result = [];
    var table = $('#table-wrapper');
    var arr = table.handsontable('getData');
    for(i = 0; i < arr.length; i++) {
        result.push([]);
        for (j = 0; j < arr[i].length; j++) {
            item = arr[i][j];
            if (! item) {
                result[i][j] = {empty: true};
            } else {
                w = 0;
                lines = item.split('\n');
                for (k = 0; k < lines.length; k++) {
                    if(spacePadding) {
                        if(lines[k].indexOf(' ', 0) !== 0) {
                            lines[k] = ' ' + lines[k];
                        }
                        if(lines[k].indexOf(' ', lines[k].length - 1) === -1) {
                            lines[k] = lines[k] + ' ';
                        }
                    }
                    if (lines[k].length > w) {
                        w = lines[k].length;
                    }
                }
                meta = table.handsontable('getCellMeta', i, j);
                hAlign = 'left';
                vAlign = 'top';
                if(meta.className) {
                    if(meta.className.indexOf('htCenter') > -1) {
                        hAlign = 'center';
                    } else if(meta.className.indexOf('htRight') > -1) {
                        hAlign = 'right';
                    } else if(meta.className.indexOf('htJustify') > -1) {
                        hAlign = 'justify';
                    }
                    if(meta.className.indexOf('htMiddle') > -1) {
                        vAlign = 'middle';
                    } else if(meta.className.indexOf('htBottom') > -1) {
                        vAlign = 'bottom';
                    }
                }
                result[i][j] = {empty: false, pseudoRows: lines, maxWidth: w, vAlign: vAlign, hAlign: hAlign};
            }
        }
    }
    return {arr: result, vLen: i, hLen: j};
}

function getWidths(data, spacePadding){
    var widths = [];
    var i, j, w, item;
    var hasContent = false;

    for (j = data.hLen - 1; j >= 0; j--) {
        w = 0;
        for (i = 0; i < data.vLen; i++) {
            item = data.arr[i][j];
            if (!item.empty) {
                if (item.maxWidth > w) {
                    w = item.maxWidth;
                }
            }
        }
        if(hasContent || w > 0) {
            if(spacePadding && w == 0) {
                w = 1;
            }
            widths[j] = w;
            hasContent = true;
        }
    }
    return widths;
}

function getHeights(data, spacePadding){
    var heights = [];
    var i, j, h, item;
    var hasContent = false;

    for (i = data.vLen - 1; i >= 0; i--) {
        h = 0;
        for (j = 0; j < data.hLen; j++) {
            item = data.arr[i][j];
            if (!item.empty) {
                if (item.pseudoRows.length > h) {
                    h = item.pseudoRows.length;
                }
            }
        }
        if(hasContent || h > 0) {
            if(spacePadding && h == 0) {
                h = 1;
            }
            heights[i] = h;
            hasContent = true;
        }
    }
    return heights;
}

function generateSeparationLine(widths, style, leftKey, centerKey, rightKey){
    var i, j;
    var str = "";
    str += style[leftKey];
    for (i = 0; i < widths.length; i++) {
        for (j = 0; j < widths[i]; j++) {
            str += style.horizontal;
        }
        if (i < widths.length-1) {
            str += style[centerKey];
        }
    }
    str += style[rightKey];
    str += '\n';
    return str;
}
