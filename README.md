# @badcj/colours

@badcj/colours is a simple and lightweight JavaScript library for decorating text in cli.

## Installation

Use the node package manager to install @badcj/colours.

```bash
npm install @badcj/colours
```

## Usage

```javascript
const {colouredText} = require('@badcj/colours');

console.log( colouredText().red("<<THIS WILL BE RED>>") );

console.log( colouredText().blue("<<THIS WILL BE BLUE AND UNDERLINED>>",['Underscore']) );

console.log( colouredText().red("<THIS WILL BE WHITE AND UNDERLINED WITH GREEN BACKGROUND>>",['Underscore','Green']) );

```

## Results

![alt text](https://github.com/BADCJ/colours/blob/main/screenshots/threeInOne.png "In Console")

## Options

Current supported colours for text and background are :
*  black
*  red
*  green
*  yellow
*  blue
*  magenta
*  cyan
*  white

And supported decorations are :
*  Bright
*  Dim
*  Underscore
*  Blink
*  Reverse
*  Hidden

For Background color , just write the supported colour name in Pascal case in decorations array.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
