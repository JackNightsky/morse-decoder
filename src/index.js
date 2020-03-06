const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
    expr = [...expr.matchAll(/\S{10}/g)].map(el=>el[0]);
    let res = expr.map(el => el === "**********" ? ' ' : [...el.matchAll(/\S{2}/g)].map(el=>el[0]));
    res = res.map(el => Array.isArray(el) ? el.map(item=> item === "00" ? '' : item === "10" ? "." : "-").join('') : ' ');
    
    res = res.map(el=> el === ' ' ? ' ' : MORSE_TABLE[el]).join('');

    return res;
}

module.exports = {
    decode
}
