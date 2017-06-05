
var soundArray = ['soundA', 'soundB', 'soundC', 'soundD', 'soundE',
'soundF', 'soundG', 'soundH', 'soundI', 'soundJ', 'soundK', 'soundL', 'soundM',
'soundN', 'soundO', 'soundP', 'soundQ', 'soundR', 'soundS', 'soundT', 'soundU',
'soundV', 'soundW', 'soundX', 'soundY', 'soundZ'];



   function soundAssigner(object){
     console.log('object.letter', object.letter);
    switch (object.letter.toUpperCase()) {
      case 'A': object.sound = soundArray[0];
      break;
      case 'B': object.sound = soundArray[1];
      return object;
      case 'C': object.sound = soundArray[2];
      return object;
      case 'D': object.sound = soundArray[3];
      break;
      case 'E': object.sound = soundArray[4];
      break;
      case 'F': object.sound = soundArray[5];
      return object;
      case 'G': object.sound = soundArray[6];
      break;
      case 'H': object.sound = soundArray[7];
      break;
      case 'I': object.sound = soundArray[8];
      break;
      case 'J': object.sound = soundArray[9];
      break;
      case 'K': object.sound = soundArray[10];
      break;
      case 'L': object.sound = soundArray[11];
      break;
      case 'M': object.sound = soundArray[12];
      break;
      case 'N': object.sound = soundArray[13];
      break;
      case 'O': object.sound = soundArray[14];
      break;
      case 'P': object.sound = soundArray[15];
      break;
      case 'Q': object.sound = soundArray[16];
      break;
      case 'R': object.sound = soundArray[17];
      break;
      case 'S': object.sound = soundArray[18];
      break;
      case 'T': object.sound = soundArray[19];
      break;
      case 'U': object.sound = soundArray[20];
      break;
      case 'V': object.sound = soundArray[21];
      break;
      case 'W': object.sound = soundArray[22];
      break;
      case 'X': object.sound = soundArray[23];
      break;
      case 'Y': object.sound = soundArray[24];
      break;
      case 'Z': object.sound = soundArray[25];
      break;

      default:

    }
    return object;

  }

  module.exports = soundAssigner;
