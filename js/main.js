(function(){
    "use strict";

    function createTable(){
        $("#table-wrapper").handsontable({
            colHeaders: false,
            contextMenu: true,
            afterChange: genPTT,
            afterCreateRow: genPTT,
            afterRemoveRow: genPTT,
            afterCreateCol: genPTT,
            afterRemoveCol: genPTT,
            afterSetCellMeta: genPTT
        });
    }

    createTable();

    updateAsciiIntersectionVisibility(document.getElementById("charset").value);
    updateHorizontalInnerHeaderBorderVisibility(document.getElementById("horizontal_header").value);
    updateVerticalInnerHeaderBorderVisibility(document.getElementById("vertical_header").value);
})();

function charsetSelectChange(cbbox){
    updateAsciiIntersectionVisibility(cbbox.value);
    generateTable(null);
}

function updateAsciiIntersectionVisibility(charsetValue) {
    if('ascii' == charsetValue) {
        $('#p_ascii_intersection').show();
        
        if('double' == $('#vertical_left_border').val()) {
            $('#vertical_left_border').val('single');
        }
        $("#vertical_left_border option[value='double']").remove();
        
        if('double' == $('#vertical_inner_header_border').val()) {
            $('#vertical_inner_header_border').val('single');
        }
        $("#vertical_inner_header_border option[value='double']").remove();
        
        if('double' == $('#vertical_inner_border').val()) {
            $('#vertical_inner_border').val('single');
        }
        $("#vertical_inner_border option[value='double']").remove();
        
        if('double' == $('#vertical_right_border').val()) {
            $('#vertical_right_border').val('single');
        }
        $("#vertical_right_border option[value='double']").remove();
        
    } else {
        $('#p_ascii_intersection').hide();
        
        if($("#vertical_left_border option[value='double']").length == 0) {
            $("#vertical_left_border").append('<option value="double">Double</option>');
        }
        if($("#vertical_inner_header_border option[value='double']").length == 0) {
            $("#vertical_inner_header_border").append('<option value="double">Double</option>');
        }
        if($("#vertical_inner_border option[value='double']").length == 0) {
            $("#vertical_inner_border").append('<option value="double">Double</option>');
        }
        if($("#vertical_right_border option[value='double']").length == 0) {
            $("#vertical_right_border").append('<option value="double">Double</option>');
        }
    }
}

function horizontalHeaderSelectChange(cbbox){
    updateHorizontalInnerHeaderBorderVisibility(cbbox.value);
    generateTable(null);
}

function updateHorizontalInnerHeaderBorderVisibility(horizontalHeaderValue) {
    if('none' == horizontalHeaderValue) {
        $('#p_horizontal_inner_header_border').hide();
    } else {
        $('#p_horizontal_inner_header_border').show();
    }
}

function verticalHeaderSelectChange(cbbox){
    updateVerticalInnerHeaderBorderVisibility(cbbox.value);
    generateTable(null);
}

function updateVerticalInnerHeaderBorderVisibility(verticalHeaderValue) {
    if('none' == verticalHeaderValue) {
        $('#p_vertical_inner_header_border').hide();
    } else {
        $('#p_vertical_inner_header_border').show();
    }
}

function borderSelectGetFocus(cbbox){
    generateTable(cbbox.name.substring(0, cbbox.name.length - 6));
}

function borderSelectChange(cbbox){
    generateTable(cbbox.name.substring(0, cbbox.name.length - 6));
}

function borderSelectLostFocus(cbbox){
    generateTable(null);
}

function predefinedStyle(value){
    if('unicode2' == value) {
        $('#charset').val('unicode');
        $('#horizontal_header').val('first_line');
        $('#vertical_header').val('first_column');
        $('#horizontal_top_border').val('double');
        $('#horizontal_inner_header_border').val('single');
        $('#horizontal_inner_border').val('none');
        $('#horizontal_bottom_border').val('double');
        $('#vertical_left_border').val('double');
        $('#vertical_inner_header_border').val('single');
        $('#vertical_inner_border').val('none');
        $('#vertical_right_border').val('double');
        $('#ascii_intersection').val('plus');
        $('#spacePadding').prop('checked', true);
    } else if('unicode3' == value) {
        $('#charset').val('unicode');
        $('#horizontal_header').val('first_line');
        $('#vertical_header').val('first_column');
        $('#horizontal_top_border').val('none');
        $('#horizontal_inner_header_border').val('double');
        $('#horizontal_inner_border').val('none');
        $('#horizontal_bottom_border').val('none');
        $('#vertical_left_border').val('none');
        $('#vertical_inner_header_border').val('single');
        $('#vertical_inner_border').val('none');
        $('#vertical_right_border').val('none');
        $('#ascii_intersection').val('plus');
        $('#spacePadding').prop('checked', true);
    } else if('unicode4' == value) {
        $('#charset').val('unicode');
        $('#horizontal_header').val('letter');
        $('#vertical_header').val('number');
        $('#horizontal_top_border').val('double');
        $('#horizontal_inner_header_border').val('double');
        $('#horizontal_inner_border').val('single');
        $('#horizontal_bottom_border').val('double');
        $('#vertical_left_border').val('double');
        $('#vertical_inner_header_border').val('double');
        $('#vertical_inner_border').val('single');
        $('#vertical_right_border').val('double');
        $('#ascii_intersection').val('plus');
        $('#spacePadding').prop('checked', true);
    } else if('unicode5' == value) {
        $('#charset').val('unicode');
        $('#horizontal_header').val('letter');
        $('#vertical_header').val('number');
        $('#horizontal_top_border').val('none');
        $('#horizontal_inner_header_border').val('double');
        $('#horizontal_inner_border').val('none');
        $('#horizontal_bottom_border').val('none');
        $('#vertical_left_border').val('none');
        $('#vertical_inner_header_border').val('double');
        $('#vertical_inner_border').val('single');
        $('#vertical_right_border').val('none');
        $('#ascii_intersection').val('plus');
        $('#spacePadding').prop('checked', true);
    } else if('unicode6' == value) {
        $('#charset').val('unicode');
        $('#horizontal_header').val('first_line');
        $('#vertical_header').val('letter');
        $('#horizontal_top_border').val('none');
        $('#horizontal_inner_header_border').val('single');
        $('#horizontal_inner_border').val('none');
        $('#horizontal_bottom_border').val('none');
        $('#vertical_left_border').val('single');
        $('#vertical_inner_header_border').val('single');
        $('#vertical_inner_border').val('single');
        $('#vertical_right_border').val('single');
        $('#ascii_intersection').val('plus');
        $('#spacePadding').prop('checked', true);
    } else if('ascii1' == value) {
        $('#charset').val('ascii');
        $('#horizontal_header').val('first_line');
        $('#vertical_header').val('none');
        $('#horizontal_top_border').val('double');
        $('#horizontal_inner_header_border').val('double');
        $('#horizontal_inner_border').val('single');
        $('#horizontal_bottom_border').val('double');
        $('#vertical_left_border').val('single');
        $('#vertical_inner_header_border').val('single');
        $('#vertical_inner_border').val('single');
        $('#vertical_right_border').val('single');
        $('#ascii_intersection').val('horizontal_border');
        $('#spacePadding').prop('checked', true);
    } else if('ascii2' == value) {
        $('#charset').val('ascii');
        $('#horizontal_header').val('first_line');
        $('#vertical_header').val('none');
        $('#horizontal_top_border').val('single');
        $('#horizontal_inner_header_border').val('single');
        $('#horizontal_inner_border').val('none');
        $('#horizontal_bottom_border').val('single');
        $('#vertical_left_border').val('single');
        $('#vertical_inner_header_border').val('single');
        $('#vertical_inner_border').val('single');
        $('#vertical_right_border').val('single');
        $('#ascii_intersection').val('plus');
        $('#spacePadding').prop('checked', true);
    } else if('ascii3' == value) {
        $('#charset').val('ascii');
        $('#horizontal_header').val('first_line');
        $('#vertical_header').val('none');
        $('#horizontal_top_border').val('none');
        $('#horizontal_inner_header_border').val('single');
        $('#horizontal_inner_border').val('none');
        $('#horizontal_bottom_border').val('none');
        $('#vertical_left_border').val('none');
        $('#vertical_inner_header_border').val('none');
        $('#vertical_inner_border').val('none');
        $('#vertical_right_border').val('none');
        $('#ascii_intersection').val('vertical_border');
        $('#spacePadding').prop('checked', true);
    } else if('ascii4' == value) {
        $('#charset').val('ascii');
        $('#horizontal_header').val('first_line');
        $('#vertical_header').val('none');
        $('#horizontal_top_border').val('none');
        $('#horizontal_inner_header_border').val('single');
        $('#horizontal_inner_border').val('none');
        $('#horizontal_bottom_border').val('none');
        $('#vertical_left_border').val('single');
        $('#vertical_inner_header_border').val('single');
        $('#vertical_inner_border').val('single');
        $('#vertical_right_border').val('single');
        $('#ascii_intersection').val('vertical_border');
        $('#spacePadding').prop('checked', true);
    } else if('ascii5' == value) {
        $('#charset').val('ascii');
        $('#horizontal_header').val('letter');
        $('#vertical_header').val('number');
        $('#horizontal_top_border').val('none');
        $('#horizontal_inner_header_border').val('single');
        $('#horizontal_inner_border').val('none');
        $('#horizontal_bottom_border').val('none');
        $('#vertical_left_border').val('none');
        $('#vertical_inner_header_border').val('single');
        $('#vertical_inner_border').val('none');
        $('#vertical_right_border').val('none');
        $('#ascii_intersection').val('plus');
        $('#spacePadding').prop('checked', true);
    } else if('ascii6' == value) {
        $('#charset').val('ascii');
        $('#horizontal_header').val('letter');
        $('#vertical_header').val('number');
        $('#horizontal_top_border').val('double');
        $('#horizontal_inner_header_border').val('double');
        $('#horizontal_inner_border').val('single');
        $('#horizontal_bottom_border').val('double');
        $('#vertical_left_border').val('single');
        $('#vertical_inner_header_border').val('single');
        $('#vertical_inner_border').val('single');
        $('#vertical_right_border').val('single');
        $('#ascii_intersection').val('plus');
        $('#spacePadding').prop('checked', true);
    } else {
        $('#charset').val('unicode');
        $('#horizontal_header').val('first_line');
        $('#vertical_header').val('none');
        $('#horizontal_top_border').val('double');
        $('#horizontal_inner_header_border').val('double');
        $('#horizontal_inner_border').val('single');
        $('#horizontal_bottom_border').val('double');
        $('#vertical_left_border').val('double');
        $('#vertical_inner_header_border').val('none');
        $('#vertical_inner_border').val('single');
        $('#vertical_right_border').val('double');
        $('#ascii_intersection').val('plus');
        $('#spacePadding').prop('checked', true)
    }
    updateAsciiIntersectionVisibility(document.getElementById("charset").value);
    updateHorizontalInnerHeaderBorderVisibility(document.getElementById("horizontal_header").value);
    updateVerticalInnerHeaderBorderVisibility(document.getElementById("vertical_header").value);
    generateTable(null);
}

function genPTT(){
    generateTable(null);
}

function generateTable(highlight){
    var unicode = {
        none: {
            none: {
                none: {
                    none: ' ',
                    single: ' ',
                    double: ' '
                },
                single: {
                    none: ' ',
                    single: '┐',
                    double: '╕'
                },
                double: {
                    none: ' ',
                    single: '╖',
                    double: '╗'
                },
            },
            single: {
                none: {
                    none: ' ',
                    single: '─',
                },
                single: {
                    none: '┌',
                    single: '┬',
                    double: 'Z'
                },
                double: {
                    none: '╓',
                    single: '╥',
                },
            },
            double: {
                none: {
                    none: ' ',
                    single: 'X',
                    double: '═'
                },
                single: {
                    none: '╒',
                    double: '╤'
                },
                double: {
                    none: '╔',
                    double: '╦'
                },
            },
        },
        single: {
            none: {
                none: {
                    none: ' ',
                    single: '┘',
                    double: '╛'
                },
                single: {
                    none: '│',
                    single: '┤',
                    double: '╡'
                },
            },
            single: {
                none: {
                    none: '└',
                    single: '┴',
                },
                single: {
                    none: '├',
                    single: '┼',
                },
            },
            double: {
                none: {
                    none: '╘',
                    double: '╧'
                },
                single: {
                    none: '╞',
                    double: '╪'
                },
            },
        },
        double: {
            none: {
                none: {
                    none: ' ',
                    single: '╜',
                    double: '╝'
                },
                double: {
                    none: '║',
                    single: '╢',
                    double: '╣'
                },
            },
            single: {
                none: {
                    none: '╙',
                    single: '╨',
                },
                single: {
                    none: 'D',
                },
                double: {
                    none: '╟',
                    single: '╫',
                },
            },
            double: {
                none: {
                    none: '╚',
                    double: '╩'
                },
                double: {
                    none: '╠',
                    double: '╬'
                }
            }
        }
    };
    var line = {
        ascii: {
            none: {
                vertical: ' ',
                horizontal: ' '
            },
            single: {
                vertical: '|',
                horizontal: '-'
            },
            double: {
                horizontal: '='
            }
        },
        unicode: {
            none: {
                vertical: ' ',
                horizontal: ' '
            },
            single: {
                vertical: unicode.single.none.single.none,
                horizontal: unicode.none.single.none.single
            },
            double: {
                vertical: unicode.double.none.double.none,
                horizontal: unicode.none.double.none.double
            }
        }
    }
    var spacePadding = document.getElementById("spacePadding").checked;
    
    var charset = document.getElementById("charset").value;
    
    var horizontalHeader = document.getElementById("horizontal_header").value;
    var verticalHeader = document.getElementById("vertical_header").value;

    var border = {
        horizontalTop: document.getElementById("horizontal_top_border").value,
        horizontalInnerHeader: document.getElementById("horizontal_inner_header_border").value,
        horizontalInner: document.getElementById("horizontal_inner_border").value,
        horizontalBottom: document.getElementById("horizontal_bottom_border").value,
        
        verticalLeft: document.getElementById("vertical_left_border").value,
        verticalInnerHeader: document.getElementById("vertical_inner_header_border").value,
        verticalInner: document.getElementById("vertical_inner_border").value,
        verticalRight: document.getElementById("vertical_right_border").value,
        
        asciiIntersection: document.getElementById("ascii_intersection").value
    }
    
    var data = extractData(spacePadding, horizontalHeader, verticalHeader);
    var widths = getWidths(data, spacePadding);
    var heights = getHeights(data, spacePadding);
    var str = "";
    var i, j, k, m, entry, item, offsets, end;

    // top
    if ('none' != border.horizontalTop) {
        str += generateSeparationLine(widths, highlight, unicode, line, charset, verticalHeader, border, 'horizontalTop', true, false);
    }

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
            str += openHighlighted(highlight, 'verticalLeft');
            str += line[charset][border.verticalLeft].vertical;
            str += closeHighlighted(highlight, 'verticalLeft');
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
                if ('none' != verticalHeader && j == 0 && heights.length > 0) {
                    str += openHighlighted(highlight, 'verticalInnerHeader');
                    str += line[charset][border.verticalInnerHeader].vertical;
                    str += closeHighlighted(highlight, 'verticalInnerHeader');
                } else if(j < widths.length - 1) {
                    str += openHighlighted(highlight, 'verticalInner');
                    str += line[charset][border.verticalInner].vertical;
                    str += closeHighlighted(highlight, 'verticalInner');
                }
            }
            str += openHighlighted(highlight, 'verticalRight');
            str += line[charset][border.verticalRight].vertical;
            str += closeHighlighted(highlight, 'verticalRight');
            str += '\n';
        }

        if ('none' != border.horizontalInnerHeader && 'none' != horizontalHeader && i == 0 && heights.length > 0) {
            str += generateSeparationLine(widths, highlight, unicode, line, charset, verticalHeader, border, 'horizontalInnerHeader', false, false);
        } else if('none' != border.horizontalInner && i < heights.length - 1) {
            str += generateSeparationLine(widths, highlight, unicode, line, charset, verticalHeader, border, 'horizontalInner', false, false);
        }
    }

    // bottom
    if ('none' != border.horizontalBottom) {
        str += generateSeparationLine(widths, highlight, unicode, line, charset, verticalHeader, border, 'horizontalBottom', false, true);
    }
    $('#ptt-wrapper').html(str);
}

function extractData(spacePadding, horizontalHeader, verticalHeader){
    var i, j, k, item, lines, w, meta, vAlign, hAlign, vLen, hLen;
    var result = [];
    var table = $('#table-wrapper');
    var arr = table.handsontable('getData');
    var iOffset = 0;
    var jOffset = 0;
    for(i = 0; i < arr.length; i++) {
        if(i == 0 && ('number' == horizontalHeader || 'letter' == horizontalHeader)) {
            result.push([]);
            if('number' == verticalHeader || 'letter' == verticalHeader) {
                //add an empty item that will be replaced later:
                result[0][0] = {empty: true};
                jOffset = 1;
            }
            for (j = 0; j < arr[i].length; j++) {
                //add an empty item that will be replaced later:
                result[0][j + jOffset] = {empty: true};
            }
            iOffset = 1;
        }
        result.push([]);
        if('number' == verticalHeader || 'letter' == verticalHeader) {
            //add an empty item that will be replaced later:
            result[i + iOffset][0] = {empty: true};
            jOffset = 1;
        }
        for (j = 0; j < arr[i].length; j++) {
            item = arr[i][j];
            if (! item) {
                result[i + iOffset][j + jOffset] = {empty: true};
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
                result[i + iOffset][j + jOffset] = {empty: false, pseudoRows: lines, maxWidth: w, vAlign: vAlign, hAlign: hAlign};
            }
        }
    }
    vLen = getVLen(result, (i + iOffset - 1), (j + jOffset - 1));
    hLen = getHLen(result, (i + iOffset - 1), (j + jOffset - 1));
    if('none' != verticalHeader) {
        jOffset = 1;
    }
    if('number' == horizontalHeader || 'letter' == horizontalHeader) {
        for (j = 0; j < hLen - jOffset; j++) {
            result[0][j + jOffset] = generateHeader(horizontalHeader, spacePadding, j);
        }
    }
    if('none' != horizontalHeader) {
        iOffset = 1;
    }
    if('number' == verticalHeader || 'letter' == verticalHeader) {
        for (i = 0; i < vLen - iOffset; i++) {
            result[i + iOffset][0] = generateHeader(verticalHeader, spacePadding, i);
        }
    }
    return {arr: result, vLen: vLen, hLen: hLen};
}

function getVLen(arr, vMax, hMax){
    var i, j, item;

    for (i = vMax; i >= 0; i--) {
        for (j = 0; j <= hMax; j++) {
            item = arr[i][j];
            if (!item.empty) {
                return i + 1;
            }
        }
    }
    return 0;
}

function getHLen(arr, vMax, hMax){
    var i, j, item;

    for (j = hMax; j >= 0; j--) {
        for (i = 0; i <= vMax; i++) {
            item = arr[i][j];
            if (!item.empty) {
                return j + 1;
            }
        }
    }
    return 0;
}

function generateHeader(headerType, spacePadding, id) {
    var str = "";
    var num, s;
    if (spacePadding) {
        str += ' ';
    }
    if('letter' == headerType) {
        s = '';
        num = id;
        do {
            s = String.fromCharCode(65 + (num % 26)) + s;
            num = Math.floor(num / 26) - 1;
        } while(num > -1);
        str += s;
    } else {
        str += (id + 1).toString();
    }
    if (spacePadding) {
        str += ' ';
    }
    return {empty: false, pseudoRows: [str], maxWidth: str.length, vAlign: 'middle', hAlign: 'center'};
}

function getWidths(data, spacePadding){
    var widths = [];
    var i, j, w, item;

    for (j = 0; j < data.hLen; j++) {
        w = 0;
        if(spacePadding) {
            w = 1;
        }
        for (i = 0; i < data.vLen; i++) {
            item = data.arr[i][j];
            if (!item.empty) {
                if (item.maxWidth > w) {
                    w = item.maxWidth;
                }
            }
        }
        widths[j] = w;
    }
    return widths;
}

function getHeights(data, spacePadding){
    var heights = [];
    var i, j, h, item;

    for (i = 0; i < data.vLen; i++) {
        h = 0;
        if(spacePadding) {
            h = 1;
        }
        for (j = 0; j < data.hLen; j++) {
            item = data.arr[i][j];
            if (!item.empty) {
                if (item.pseudoRows.length > h) {
                    h = item.pseudoRows.length;
                }
            }
        }
        heights[i] = h;
    }
    return heights;
}

function generateSeparationLine(widths, highlight, unicode, line, charset, verticalHeader, border, horizontalBorderKey, top, bottom){
    var j, k, leftChar, innerHeaderChar, innerChar, rightChar;
    var horizontalBorder = border[horizontalBorderKey];
    if('ascii' == charset) {
        if('horizontal_border' == border.asciiIntersection) {
            leftChar = line.ascii[horizontalBorder].horizontal;
            innerHeaderChar = line.ascii[horizontalBorder].horizontal;
            innerChar = line.ascii[horizontalBorder].horizontal;
            rightChar = line.ascii[horizontalBorder].horizontal;
        } else if('vertical_border' == border.asciiIntersection) {
            leftChar = line.ascii[border.verticalLeft].vertical;
            innerHeaderChar = line.ascii[border.verticalInnerHeader].vertical;
            innerChar = line.ascii[border.verticalInner].vertical;
            rightChar = line.ascii[border.verticalRight].vertical;
        } else {
            leftChar = '+';
            innerHeaderChar = '+';
            innerChar = '+';
            rightChar = '+';
        }
    } else {
        leftChar = unicode[(top) ? 'none' : border.verticalLeft][horizontalBorder][(bottom) ? 'none' : border.verticalLeft]['none'];
        innerHeaderChar = unicode[(top) ? 'none' : border.verticalInnerHeader][horizontalBorder][(bottom) ? 'none' : border.verticalInnerHeader][horizontalBorder];
        innerChar = unicode[(top) ? 'none' : border.verticalInner][horizontalBorder][(bottom) ? 'none' : border.verticalInner][horizontalBorder];
        rightChar = unicode[(top) ? 'none' : border.verticalRight]['none'][(bottom) ? 'none' : border.verticalRight][horizontalBorder];
    }
    
    var horizontalChar = line[charset][horizontalBorder].horizontal;
    
    var str = "";
    str += openHighlighted(highlight, horizontalBorderKey);
    str += openHighlighted(highlight, 'verticalLeft');
    str += leftChar;
    str += closeHighlighted(highlight, 'verticalLeft');
    for (j = 0; j < widths.length; j++) {
        for (k = 0; k < widths[j]; k++) {
            str += horizontalChar;
        }
        if ('none' != verticalHeader && j == 0) {
            str += openHighlighted(highlight, 'verticalInnerHeader');
            str += innerHeaderChar;
            str += closeHighlighted(highlight, 'verticalInnerHeader');
        } else if(j < widths.length - 1) {
            str += openHighlighted(highlight, 'verticalInner');
            str += innerChar;
            str += closeHighlighted(highlight, 'verticalInner');
        }
    }
    str += openHighlighted(highlight, 'verticalRight');
    str += rightChar;
    str += closeHighlighted(highlight, 'verticalRight');
    str += closeHighlighted(highlight, horizontalBorderKey);
    str += '\n';
    return str;
}

function openHighlighted(highlight, key){
    if(key == highlight) {
        return '<span class="highlighted">';
    } else {
        return '';
    }
}

function closeHighlighted(highlight, key){
    if(key == highlight) {
        return '</span>';
    } else {
        return '';
    }
}

