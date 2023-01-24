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
    let newExpr=[];
    let res;
    let newKey;
    let newMorse={};
    expr=expr.split('');
    for (let i = 0; i < expr.length; i += 10) {
        let elem=expr.slice(i, i + 10);
        newExpr.push(elem)
          }
        newExpr=newExpr.map((el)=>el.join(''));
    for (key in MORSE_TABLE) {
        newKey=key.split('.').join('10').split('-').join('11').split('')
        for (let i=newKey.length;i<10;i++){
            newKey.unshift('0');
        }
        newKey= newKey.join('');
        newMorse[newKey]=MORSE_TABLE[key];

    }
    res = newExpr.map((el)=>{
        for (key in newMorse){
            if (el===key){
                return el=newMorse[key];
            }
        }
        if (el=== '**********'){
                return el=' ';
            } 
        
    });
    return res.join('');
}

module.exports = {
    decode
}