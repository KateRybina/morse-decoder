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
    // write your solution here	
  let stringSplit = [];
  let twoSymbol = '';
  let letter = [];
  let letterToTwoSymb = [];
  let arrayLetter = [];
  let arrayMorse = [];
  let result = []; 

  // split by 10 characters
  for (let i = 0; i < expr.length; i += 10) {
    stringSplit.push(expr.substr(i, 10));
  }
  
 // split by 2 charaters and find the letter
  for (let i = 0; i < stringSplit.length; i++) {
    letter = stringSplit[i]; 
    for (let j = 0; j < stringSplit[i].length; j += 2) {
      twoSymbol = letter.substr(j, 2);
      letterToTwoSymb.push(twoSymbol);
    }
   
//replace 10 to '.', 11 to '-', ** to ' '. Get a word
    for (let k = 0; k < letterToTwoSymb.length; k++) {
      if (letterToTwoSymb[k] === '10') {
        letterToTwoSymb[k] = '.';
      }
      if (letterToTwoSymb[k] === '11') {
        letterToTwoSymb[k] = '-';
      }
      if (letterToTwoSymb[k] === '**') {
        letterToTwoSymb[k] = ' ';
      }
      if (letterToTwoSymb[k] !== '00') {
        arrayLetter.push(letterToTwoSymb[k]);
      }
    }

     arrayMorse = arrayLetter.join('').split(',');
  
    for (let l = 0; l < arrayMorse.length; l++) {
      if (arrayMorse[l] !== '     ') {
        for (const key in MORSE_TABLE) {
          if (key === arrayMorse[l]) {
            arrayMorse[l] = MORSE_TABLE[key];
            result = result + arrayMorse[l];
          }
        }
      } else {
        result = result + ' ';
      }
    }

    twoSymbol = '';
    letter = [];
    letterToTwoSymb = [];
    arrayLetter = [];
    arrayMorse = [];
	}
	
	return result;
}
	


module.exports = {
    decode
}
