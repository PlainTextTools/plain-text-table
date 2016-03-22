# Plain Text Table

Interactively create and edit tables and export them to plain text.

## Use the tool online

Please visit : http://plaintexttools.github.io/plain-text-table

## Features

* Interactive input table (using [handsontable](http://handsontable.com/))
* Unicode or ASCII output
* Flexible border configuration
* Merged cell support (colspan and rowspan)
* Multiline text in the cells
* Text alignement support (horizontal and vertical)
* Predefined style

All configuration options explained in the [user manual](user_manual/README.md).

## Output examples

Unicode characters with multiline and merged cells:

    ╔════════╦══════╤═══════════╤═════════╤═══════════╤═══════════╤═════════════╗
    ║  Who?  ║ Code │  Monday   │ Tuesday │ Wednesday │ Thursday  │   Friday    ║
    ╠════════╬══════╪═══════════╧═════════╧═══════════╪═══════════╪═════════════╣
    ║ Team A ║   23 │          Proin id nunc          │ Fringilla │    Lorem    ║
    ║        ║      │                                 │           │    Ipsum    ║
    ╟────────╫──────┼───────────┬─────────┬───────────┴───────────┼─────────────╢
    ║        ║      │           │  Ante   │                       │             ║
    ║ Team B ║    4 │ Fermentum │ Ipisum  │         Amet          │    Lyks     ║
    ║        ║      │           │ Primis  │                       │             ║
    ╟────────╫──────┼───────────┼─────────┼───────────┬───────────┼─────────────╢
    ║ Team C ║   52 │ Metus ex  │  Dxow   │ Malesuada │           │ Ullamcorper ║
    ╟────────╫──────┼───────────┴─────────┼───────────┤ Vulputate ├─────────────╢
    ║ Team D ║   19 │       Ornare        │ Tincidunt │           │     Rwe     ║
    ╚════════╩══════╧═════════════════════╧═══════════╧═══════════╧═════════════╝

Ascii characters with spreadsheet headers:

    +===+========+===========+=======+=====+
    |   |   A    |     B     |   C   |  D  |
    +===+========+===========+=======+=====+
    | 1 | Alice  | Johnson   |       | 293 |
    +---+--------+-----------+-------+-----+
    | 2 | Bob    | Smith     | ????? |   2 |
    +---+--------+-----------+-------+-----+
    | 3 | Carrie | Sheffield |   ?   |  42 |
    +===+========+===========+=======+=====+

## Get in touch / bug tracker

Use the [plain-text-table issue tracker](http://github.com/lorefnon/plain-text-table/issues) on GitHub.

## License

[HTML5 Boilerplate](LICENSE.md)
