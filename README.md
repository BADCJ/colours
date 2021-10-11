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

console.log( colouredText().red("<<THIS WILL BE RED AND UNDERLINED>>") );

console.log( colouredText().red("<THIS WILL BE WHITE AND UNDERLINED WITH GREEN BACKGROUND>>") );

```

## Results

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "In Console")

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


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
