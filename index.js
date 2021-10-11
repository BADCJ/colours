
const colorCodes = {

    //needed after every upgrade
    Reset: "\x1b[0m",

    //TEXT DECORATIONS
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",

    //TEXT COLOR
    FgBlack: "\x1b[30m",
    FgRed: "\x1b[31m",
    FgGreen: "\x1b[32m",
    FgYellow: "\x1b[33m",
    FgBlue: "\x1b[34m",
    FgMagenta: "\x1b[35m",
    FgCyan: "\x1b[36m",
    FgWhite: "\x1b[37m",

    //BACKGROUNDS
    Black: "\x1b[40m",
    Red: "\x1b[41m",
    Green: "\x1b[42m",
    Yellow: "\x1b[43m",
    Blue: "\x1b[44m",
    Magenta: "\x1b[45m",
    Cyan: "\x1b[46m",
    White: "\x1b[47m"

};


let strArr = [];


var paintText = { 

    black : (str,deco) => {    return processText('FgBlack',str,deco) },
    red : (str,deco) => {    return processText('FgRed',str,deco) },
    green : (str,deco) => {    return processText('FgGreen',str,deco) },
    yellow : (str,deco) => {    return processText('FgYellow',str,deco) },
    blue : (str,deco) => {    return processText('FgBlue',str,deco) },
    magenta : (str,deco) => {    return processText('FgMagenta',str,deco) },
    cyan : (str,deco) => {    return processText('FgCyan',str,deco) },
    white : (str,deco) => {    return processText('FgWhite',str,deco) },

}


function processText (clr,str,deco=[]) {

    if( containsAny( deco , Object.keys(colorCodes))   )   {

        deco.forEach(property => {
            strArr.push(colorCodes[property])
        });

    }

    strArr.push( colorCodes[clr] , str )

    resetDecorations();

    return strArr.join("") ;
    
}


function resetDecorations (){
    strArr.push(colorCodes.Reset)
}

function containsAny (source,target) {

    var result = source.filter(function(item){ return target.indexOf(item) > -1});   
    return (result.length > 0);  

} 



function colouredText() {

    return { ...paintText } ;
    
}


// console.log( printPaint().red("<<TEXT HERE>>",['Underscore'])) ;


module.exports = {
    colouredText
}

