# Plain Text Table - User Manual

Interactively create and edit tables and export them to plain text.
The tool can be used [online](http://lorefnon.me/plain-text-table).

## Edit the table

Edit the grid and fill it with the the data you want to represent as text.

![An example table filled with data](table_example.png)

With the context menu in each cell, the text alignment (vertical and horizontal) can be set.
Those properties are reflected in the output.

## Charset option

* Unicode
* Ascii

## Headers option

### Horizontal Header:

Type of column headers.

* __None__: No header. The first line is directly the content.
* __First line__: The first line of the table is used as header.
* __Number__: number are used as column header.
* __Letter__: letters are used as column header (A, B, C.. - like in Excel).


### Vertical Header:

Type of line headers.

* __None__: No header. The first column is directly the content.
* __First column__: The first column of the table is used as header.
* __Number__: number are used as line header (1, 2, 3.. - like in Excel).
* __Letter__: letters are used as line header.

## Borders option

For each border you can select:

* __None__: no border at all
* __Single__: single border
* __Double__: double border

Depending on the char set (Unicode or ASCII) some combinations are not possible.

To help you to understand which border your are modifying with one combo box, the border corresponding to the selected combo box is highlighted in the output.
To remove the highlighting just focus somewhere else. 

### Horizontal Top Border

    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    ║   ║   Name    │ First Name │ Track Id │ Checked ║
    ╠═══╬═══════════╪════════════╪══════════╪═════════╣
    ║ 1 ║ Sheffield │ Alice      │      347 │   yes   ║
    ╟───╫───────────┼────────────┼──────────┼─────────╢
    ║   ║           │ Carrie,    │          │         ║
    ║ 2 ║ Smith     │ Bob and    │      152 │         ║
    ║   ║           │ Friends    │          │         ║
    ╟───╫───────────┼────────────┼──────────┼─────────╢
    ║ 3 ║ Samson    │ Dick       │      948 │   yes   ║
    ╚═══╩═══════════╧════════════╧══════════╧═════════╝

### Horizontal Inner Header Border

    ╔═══╦═══════════╤════════════╤══════════╤═════════╗
    ║   ║   Name    │ First Name │ Track Id │ Checked ║
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    ║ 1 ║ Sheffield │ Alice      │      347 │   yes   ║
    ╟───╫───────────┼────────────┼──────────┼─────────╢
    ║   ║           │ Carrie,    │          │         ║
    ║ 2 ║ Smith     │ Bob and    │      152 │         ║
    ║   ║           │ Friends    │          │         ║
    ╟───╫───────────┼────────────┼──────────┼─────────╢
    ║ 3 ║ Samson    │ Dick       │      948 │   yes   ║
    ╚═══╩═══════════╧════════════╧══════════╧═════════╝

This border is only present if column headers are defined (`horizontal header` set to `first line`, `number` or `letter`).

### Horizontal Inner Border

    ╔═══╦═══════════╤════════════╤══════════╤═════════╗
    ║   ║   Name    │ First Name │ Track Id │ Checked ║
    ╠═══╬═══════════╪════════════╪══════════╪═════════╣
    ║ 1 ║ Sheffield │ Alice      │      347 │   yes   ║
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    ║   ║           │ Carrie,    │          │         ║
    ║ 2 ║ Smith     │ Bob and    │      152 │         ║
    ║   ║           │ Friends    │          │         ║
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    ║ 3 ║ Samson    │ Dick       │      948 │   yes   ║
    ╚═══╩═══════════╧════════════╧══════════╧═════════╝

### Horizontal Bottom Border

    ╔═══╦═══════════╤════════════╤══════════╤═════════╗
    ║   ║   Name    │ First Name │ Track Id │ Checked ║
    ╠═══╬═══════════╪════════════╪══════════╪═════════╣
    ║ 1 ║ Sheffield │ Alice      │      347 │   yes   ║
    ╟───╫───────────┼────────────┼──────────┼─────────╢
    ║   ║           │ Carrie,    │          │         ║
    ║ 2 ║ Smith     │ Bob and    │      152 │         ║
    ║   ║           │ Friends    │          │         ║
    ╟───╫───────────┼────────────┼──────────┼─────────╢
    ║ 3 ║ Samson    │ Dick       │      948 │   yes   ║
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

### Vertical Left Border

    X═══╦═══════════╤════════════╤══════════╤═════════╗
    X   ║   Name    │ First Name │ Track Id │ Checked ║
    X═══╬═══════════╪════════════╪══════════╪═════════╣
    X 1 ║ Sheffield │ Alice      │      347 │   yes   ║
    X───╫───────────┼────────────┼──────────┼─────────╢
    X   ║           │ Carrie,    │          │         ║
    X 2 ║ Smith     │ Bob and    │      152 │         ║
    X   ║           │ Friends    │          │         ║
    X───╫───────────┼────────────┼──────────┼─────────╢
    X 3 ║ Samson    │ Dick       │      948 │   yes   ║
    X═══╩═══════════╧════════════╧══════════╧═════════╝

### Vertical Inner Header Border

    ╔═══X═══════════╤════════════╤══════════╤═════════╗
    ║   X   Name    │ First Name │ Track Id │ Checked ║
    ╠═══X═══════════╪════════════╪══════════╪═════════╣
    ║ 1 X Sheffield │ Alice      │      347 │   yes   ║
    ╟───X───────────┼────────────┼──────────┼─────────╢
    ║   X           │ Carrie,    │          │         ║
    ║ 2 X Smith     │ Bob and    │      152 │         ║
    ║   X           │ Friends    │          │         ║
    ╟───X───────────┼────────────┼──────────┼─────────╢
    ║ 3 X Samson    │ Dick       │      948 │   yes   ║
    ╚═══X═══════════╧════════════╧══════════╧═════════╝

This border is only present if line headers are defined (`vertical header` set to `first column`, `number` or `letter`).

### Vertical Inner Border

    ╔═══╦═══════════X════════════X══════════X═════════╗
    ║   ║   Name    X First Name X Track Id X Checked ║
    ╠═══╬═══════════X════════════X══════════X═════════╣
    ║ 1 ║ Sheffield X Alice      X      347 X   yes   ║
    ╟───╫───────────X────────────X──────────X─────────╢
    ║   ║           X Carrie,    X          X         ║
    ║ 2 ║ Smith     X Bob and    X      152 X         ║
    ║   ║           X Friends    X          X         ║
    ╟───╫───────────X────────────X──────────X─────────╢
    ║ 3 ║ Samson    X Dick       X      948 X   yes   ║
    ╚═══╩═══════════X════════════X══════════X═════════╝

### Vertical Bottom Border

    ╔═══╦═══════════╤════════════╤══════════╤═════════X
    ║   ║   Name    │ First Name │ Track Id │ Checked X
    ╠═══╬═══════════╪════════════╪══════════╪═════════X
    ║ 1 ║ Sheffield │ Alice      │      347 │   yes   X
    ╟───╫───────────┼────────────┼──────────┼─────────X
    ║   ║           │ Carrie,    │          │         X
    ║ 2 ║ Smith     │ Bob and    │      152 │         X
    ║   ║           │ Friends    │          │         X
    ╟───╫───────────┼────────────┼──────────┼─────────X
    ║ 3 ║ Samson    │ Dick       │      948 │   yes   X
    ╚═══╩═══════════╧════════════╧══════════╧═════════X

## ASCII intersection character

When the charset is set to `Ascii`, this option allows to configure what the character at the intersection of two borders will be.

__Plus__ (default):

    +====+========+
    | Id | Name   |
    +====+========+
    | 1  | Alice  |
    +----+--------+
    | 2  | Bob    |
    +----+--------+
    | 3  | Carrie |
    +====+========+

__Horizontal border__:

    ===============
    | Id | Name   |
    ===============
    | 1  | Alice  |
    ---------------
    | 2  | Bob    |
    ---------------
    | 3  | Carrie |
    ===============

__Vertical border__:

    |====|========|
    | Id | Name   |
    |====|========|
    | 1  | Alice  |
    |----|--------|
    | 2  | Bob    |
    |----|--------|
    | 3  | Carrie |
    |====|========|

## Cell padding

There is a checkbox to configure if additional spaces should be added to ensure a cell padding of one space in each cell.

__Checked__ (default):

    ┌────┬────────┐
    │ Id │ Name   │
    ├────┼────────┤
    │ 1  │ Alice  │
    │ 2  │ Bob    │
    │ 3  │ Carrie │
    └────┴────────┘

__Not checked__ (default):

    ┌──┬──────┐
    │Id│Name  │
    ├──┼──────┤
    │1 │Alice │
    ├──┼──────┤
    │2 │Bob   │
    ├──┼──────┤
    │3 │Carrie│
    └──┴──────┘

## Output

The output is displayed right below the table.