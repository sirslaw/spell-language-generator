/**
 *
 * this project is currently translated into nodejs from the following:
 *  - http://www.screwytruths.com/Quor.html
 *  - http://www.screwytruths.com/Elven.html
 *  - http://www.screwytruths.com/Goblin.html
 *
 * we do not know precisely who the original translator or developer are
 * only their names:
 *  - translator, Skye "Masterful Norg" Freeman
 *  - programmer, Oliver "Knight Otu" Frank
 *
 * if you have links to these individuals please contact the project owner
 * so we can provide credit
 *
 */

function translate(text) {

  let words = text;
  let wordsLength = words.length;

  let translated = "";
  let continuedTranslated = "";
  let controlCons = 0;
  let controlDiff = 0;
  let addCons = '';
  let previousLetter = "";
  let nextLetter = "";

  // for every letter in the given words
  for (let i = 0; i < wordsLength; i++) {

    // establish letter context (surrounding letters)
    nextLetter = words.charAt(i)

    switch (nextLetter) {
      case "A":
        translated = "A";
        controlCons = 0;
        addCons = "";
        controlDiff = 2;

        break;

      case "a":
        translated = "a";
        controlCons = 0;
        addCons = "";
        if (controlDiff !== 0) {
          translated = ""
        };
        controlDiff = 2;

        break;

      case "B":
        translated = "H";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;

        break;

      case "b":
        translated = "h";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;

        break;

      case "C":
        translated = "K";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "h";
        controlDiff = 0

        break;

      case "c":
        translated = "k";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "h";
        controlDiff = 0

        break;

      case "D":
        translated = "K";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;

        break;

      case "d":
        translated = "l";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "k";
        controlDiff = 0;
        if (i === 0 || previousLetter === " ") {
          translated = "k";
          addCons = "";
        }

        break;

      case "E":
        translated = "A";
        controlCons = 0;
        addCons = "";
        controlDiff = 2;

        break;

      case "e":
        translated = "a";
        controlCons = 0;
        addCons = "";
        if (controlDiff !== 0) {
          translated = ""
        };
        controlDiff = 2;

        break;

      case "F":
        translated = "N";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "h";
        controlDiff = 0;

        break;

      case "f":
        translated = "n";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "h";
        controlDiff = 0;

        break;

      case "G":
        translated = "P";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;

        break;

      case "g":
        translated = "p";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;

        break;

      case "H":
        translated = "D";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;

        break;

      case "h":
        translated = "d";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;

        break;

      case "I":
        translated = "A";
        controlCons = 0;
        addCons = "";
        controlDiff = 2;

        break;

      case "i":
        translated = "a";
        if (controlDiff !== 0) {
          translated = ""
        };
        controlDiff = 2;
        controlCons = 0;
        addCons = "";

        break;

      case "J":
        translated = "K";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "r";
        controlDiff = 0;

        break;

      case "j":
        translated = "k";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "r";
        controlDiff = 0;

        break;

      case "K":
        translated = "T";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;

        break;

      case "k":
        translated = "t";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;

        break;

      case "L":
        translated = "R";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "ath";
        controlDiff = 0;

        break;

      case "l":
        translated = "r";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "ath";
        controlDiff = 0;

        break;

      case "M":
        translated = "Sh";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "t";
        controlDiff = 0;

        break;

      case "m":
        translated = "sh";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "t";
        controlDiff = 0;

        break;

      case "N":
        translated = "Th";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;

        break;

      case "n":
        translated = "th";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;

        break;

      case "O":
        translated = "E";
        controlCons = 0;
        addCons = "";
        controlDiff = "E";

        break;

      case "o":
        translated = "e";
        controlCons = 0;
        addCons = "";
        if (controlDiff !== 0) {
          translated = ""
        };
        controlDiff = 1;

        break;

      case "P":
        translated = "K";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "h";
        controlDiff = 0;

        break;

      case "p":
        translated = "k";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "h";
        controlDiff = 0;

        break;

      case "Q":
        translated = "Qu";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 0;
        addCons = "";
        controlDiff = 3

        break;

      case "q":
        translated = "qu";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 0;
        addCons = "";
        controlDiff = 3

        break;

      case "R":
        translated = "L";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "ath";
        controlDiff = 0;

        break;

      case "r":
        translated = "l";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "ath";
        controlDiff = 0;

        break;

      case "S":
        translated = "Sh";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "t";
        controlDiff = 0;

        break;

      case "s":
        translated = "sh";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "t";
        controlDiff = 0;

        break;

      case "T":
        translated = "Th";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;

        break;

      case "t":
        translated = "th";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;

        break;

      case "U":
        translated = "I";
        controlCons = 0;
        addCons = "";
        controlDiff = 1;

        break;

      case "u":
        translated = "i";
        controlCons = 0;
        addCons = "";
        if (controlDiff !== 0 && controlDiff !== 2) {
          translated = ""
        };
        controlDiff = 1;

        break;

      case "V":
        translated = "J";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;

        break;

      case "v":
        translated = "j";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;

        break;

      case "W":
        translated = "V";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;

        break;

      case "w":
        translated = "v";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;

        break;

      case "X":
        translated = "G";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;

        break;

      case "x":
        translated = "g";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;

        break;

      case "Y":
        translated = "O";
        controlCons = 0;
        addCons = "";
        controlDiff = 1;

        break;

      case "y":
        translated = "o";
        controlCons = 0;
        addCons = "";
        if (controlDiff !== 0 && controlDiff !== 3) {
          translated = ""
        };
        controlDiff = 1;

        break;

      case "Z":
        translated = "S";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;



        break;

      case "z":
        translated = "s";
        if (controlCons === 1) {
          translated = addCons;
          addCons = "";
          controlCons = 1;
          addCons = "";
          break
        };
        controlCons = 1;
        addCons = "";
        controlDiff = 0;

        break;

      default:
        translated = text.charAt(i);
        controlCons = 0;
        addCons = "";
        controlDiff = 0
    }

    if (nextLetter === previousLetter) {
      translated = " "
    }

    continuedTranslated = continuedTranslated.concat(translated)
    previousLetter = nextLetter

  }

  return continuedTranslated;

}

module.exports = {translate}
