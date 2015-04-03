(function(){
    "use strict";

    function createTable(){
        $("#table-wrapper").handsontable({
            colHeaders: false,
            contextMenu: true,
            afterChange: genPTT
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
        }
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
        }
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
        }
    }

    var arr = extractData();
    var widths = getWidths(arr);
    var str = "";
    var i, j, k, m, entry, row, pseudoRows, plen;

    // top
    str += style['top_left'];
    for (i = 0; i < widths.length; i++) {
        for (j = 0; j < widths[i]; j++) {
            str += style['horizontal'];
        }
        if (i < widths.length-1) {
            str += style['top_center'];
        }
    }
    str += style['top_right'];
    str += '\n';

    // rows
    for (k = 0; k < arr.length; k++) {

        row = arr[k];
        pseudoRows = [];

        for (i = 0; i < widths.length; i++) {
            entry = arr[k][i];
            if (! entry) continue;
            entry = entry.split('\n');
            plen = pseudoRows.length;
            for (j = 0; j < entry.length - plen; j++) {
                pseudoRows.push([]);
            }
            for (j = 0; j < entry.length; j++) {
                pseudoRows[j][i] = entry[j];
            }
        }

        for (m = 0; m < pseudoRows.length; m++) {
            str += style['vertical'];
            for (i = 0; i < widths.length; i++) {
                entry = pseudoRows[m][i] || '';
                str += entry;
                for (j = entry.length; j < widths[i]; j++) {
                    str += ' ';
                }
                if (i < widths.length-1) {
                    str += style['vertical'];
                }
            }
            str += style['vertical'];
            str += '\n';
        }


        if (k < arr.length-1) {
            str += style['middle_left'];
            for (i = 0; i < widths.length; i++) {
                for (j = 0; j < widths[i]; j++) {
                    str += style['horizontal'];
                }
                if (i < widths.length-1) {
                    str += style['middle_center'];
                }
            }
            str += style['middle_right'];
            str += '\n';
        }
    }

    // bottom
    str += style['bottom_left'];
    for (i = 0; i < widths.length; i++) {
        for (j = 0; j < widths[i]; j++) {
            str += style['horizontal'];
        }
        if (i < widths.length-1) {
            str += style['bottom_center'];
        }
    }
    str += style['bottom_right'];
    str += '\n';
    $('#ptt-wrapper').text(str);
}

function extractData(){
    return $('#table-wrapper').handsontable('getData');
}

function getWidths(arr){
    var widths = [];
    var i, j, k, w, item, lines;

    for(i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            w = widths[j] || 0;
            item = arr[i][j];
            if (! item) continue;
            lines = item.split('\n');
            for (k = 0; k < lines.length; k++) {
                if (lines[k].length > w) {
                    w = lines[k].length;
                }
            }
            widths[j] = w;
        }
    }
    return widths;
}
