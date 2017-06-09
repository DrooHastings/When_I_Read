
var mp3Path = "vendors/When-I-Read-Audio/";

var soundArray = [mp3Path + 'A.mp3', mp3Path + 'B.mp3', mp3Path + 'C.mp3', mp3Path + 'D.mp3', mp3Path + 'E.mp3',
mp3Path + 'F.mp3', mp3Path + 'G.mp3', mp3Path + 'H.mp3', mp3Path + 'I.mp3', mp3Path + 'J.mp3', mp3Path + 'K.mp3', mp3Path + 'L.mp3', mp3Path + 'M.mp3',
mp3Path + 'N.mp3',mp3Path + 'O.mp3', mp3Path + 'P.mp3', mp3Path + 'Q.mp3', mp3Path + 'R.mp3', mp3Path + 'S.mp3', mp3Path + 'T.mp3', mp3Path + 'U.mp3',
mp3Path + 'V.mp3', mp3Path + 'W.mp3', mp3Path + 'X.mp3', mp3Path + 'Y.mp3', mp3Path + 'Z.mp3'];



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
