const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct;
  }

  calc(indirect) {
    if (this.direct == false) {
      return indirect.split('').reverse().join('');
    }
    else {
      return indirect;
    }
  }

  encrypt(message, key) {

    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    let code;
    let charCode;
    let letter;
    let j = 0;

    for (let i = 0; i < message.length; i++) {

      code = message.toUpperCase()[i].charCodeAt(0) - 65;
      charCode = key.toUpperCase()[j % key.length].charCodeAt(0) - 65;

      if (code >= 0 && code <= 25) {
        letter = (code + charCode) % 26;
        result += String.fromCharCode(letter + 65);
        j++;
      } else {
        result += message[i];
      }
    }
    result = this.calc(result);
    return result;
  }

  decrypt(message, key) {

    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    let code;
    let charCode;
    let letter;
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      code = message.toUpperCase()[i].charCodeAt(0) - 65;
      charCode = key.toUpperCase()[j % key.length].charCodeAt(0) - 65;

      if (code >= 0 && code <= 25) {
        letter = (code - charCode + 26) % 26;
        result += String.fromCharCode(letter + 65);
        j++;
      } else {
        result = result + message[i];
      }
    }

    result = this.calc(result);
    return result;
  }
}
module.exports = {
  VigenereCipheringMachine
};
