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
  let previousLetter = "";
  let currentletter = "";
  let wordStart = 1;
  let wordEnd = 0;
  let typeSwitches = 0;

  // for every letter in the given words
  for (let i = 0; i < wordsLength; i++) {

    // establish letter context (surrounding letters)
    currentletter = words.charAt(i)

    if (previousLetter === "" || previousLetter === " " || previousLetter === "-" || previousLetter === "'") {
      wordStart = 1
    }

    if (wordStart === 1) {
      // removes current word, and passes along remainingWords of phrase to function
      typeSwitches = countTypeSwitches(words.substring(i, wordsLength))
    }

    if (typeSwitches > 0) {

      if ((previousLetter === "A" || previousLetter === "a" || previousLetter === "E" || previousLetter === "e" || previousLetter === "I" || previousLetter === "i" || previousLetter === "O" || previousLetter === "o" || previousLetter === "U" || previousLetter === "u" || previousLetter === "Y" || previousLetter === "y") && (currentletter === "B" || currentletter === "b" || currentletter === "C" || currentletter === "c" || currentletter === "D" || currentletter === "d" || currentletter === "F" || currentletter === "f" || currentletter === "G" || currentletter === "g" || currentletter === "H" || currentletter === "h" || currentletter === "J" || currentletter === "j" || currentletter === "K" || currentletter === "k" || currentletter === "L" || currentletter === "l" || currentletter === "M" || currentletter === "m" || currentletter === "N" || currentletter === "n" || currentletter === "P" || currentletter === "p" || currentletter === "Q" || currentletter === "q" || currentletter === "R" || currentletter === "r" || currentletter === "S" || currentletter === "s" || currentletter === "T" || currentletter === "t" || currentletter === "V" || currentletter === "v" || currentletter === "W" || currentletter === "w" || currentletter === "X" || currentletter === "x" || currentletter === "Z" || currentletter === "z")) {
        typeSwitches = typeSwitches - 1
      }

      if ((currentletter === "A" || currentletter === "a" || currentletter === "E" || currentletter === "e" || currentletter === "I" || currentletter === "i" || currentletter === "O" || currentletter === "o" || currentletter === "U" || currentletter === "u" || currentletter === "Y" || currentletter === "y") && (previousLetter === "B" || previousLetter === "b" || previousLetter === "C" || previousLetter === "c" || previousLetter === "D" || previousLetter === "d" || previousLetter === "F" || previousLetter === "f" || previousLetter === "G" || previousLetter === "g" || previousLetter === "H" || previousLetter === "h" || previousLetter === "J" || previousLetter === "j" || previousLetter === "K" || previousLetter === "k" || previousLetter === "L" || previousLetter === "l" || previousLetter === "M" || previousLetter === "m" || previousLetter === "N" || previousLetter === "n" || previousLetter === "P" || previousLetter === "p" || previousLetter === "Q" || previousLetter === "q" || previousLetter === "R" || previousLetter === "r" || previousLetter === "S" || previousLetter === "s" || previousLetter === "T" || previousLetter === "t" || previousLetter === "V" || previousLetter === "v" || previousLetter === "W" || previousLetter === "w" || previousLetter === "X" || previousLetter === "x" || previousLetter === "Z" || previousLetter === "z")) {
        typeSwitches = typeSwitches - 1
      }

    };

    if (typeSwitches < 1) {
      wordEnd = 1
    }

    if (i === (wordsLength)) {
      wordEnd = 1
    }

    switch (currentletter) {
      case "A":
        translated = "A";
        controlCons = 0;
        if (controlDiff === 1) {
          translated = "";
          break;
        };
        if (wordStart === 1) {
          translated = "A";
          controlDiff = 1;
          break;
        };
        if (wordEnd === 1) {
          translated = "Uul";
          controlDiff = 1;
          break;
        };
        controlDiff = 1;
        break;

      case "a":
        translated = "a";
        controlCons = 0;
        if (controlDiff === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "a";
          controlDiff = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "uul";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "B":
        translated = "K";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "Rh";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "R";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "b":
        translated = "k";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "rh";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "r";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "C":
        translated = "L";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "Sh";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "N";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "c":
        translated = "l";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "sh";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "n";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "D":
        translated = "Rth";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "Dr";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "L";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "d":
        translated = "rth";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "dr";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "l";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "E":
        translated = "Aa";
        controlCons = 0;
        if (controlDiff === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "O";
          controlDiff = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "Aan";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "e":
        translated = "aa";
        controlCons = 0;
        if (controlDiff === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "o";
          controlDiff = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "aan";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "F":
        translated = "Kl";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "Dh";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "R";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "f":
        translated = "kl";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "dh";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "r";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "G":
        translated = "Rl";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "H";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "C";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "g":
        translated = "rl";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "h";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "c";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "H":
        translated = "L't";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "M";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "T";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "h":
        translated = "l't";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "m";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "t";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "I":
        translated = "E";
        controlCons = 0;
        if (controlDiff === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "A";
          controlDiff = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "Aal";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "i":
        translated = "e";
        controlCons = 0;
        if (controlDiff === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "a";
          controlDiff = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "aal";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "J":
        translated = "R";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "Lh";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "Sh";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "j":
        translated = "r";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "lh";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "sh";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "K":
        translated = "L";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "M";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "Sh";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "k":
        translated = "l";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "m";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "sh";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "L":
        translated = "L'd";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "K";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "Ch";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "l":
        translated = "l'd";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "k";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "ch";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "M":
        translated = "Lk";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "Gh";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "L";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "m":
        translated = "lk";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "gh";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "l";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "N":
        translated = "K";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "Khr";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "C";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "n":
        translated = "k";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "khr";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "c";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "O":
        translated = "Uu";
        controlCons = 0;
        if (controlDiff === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "O";
          controlDiff = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "Uun";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "o":
        translated = "uu";
        controlCons = 0;
        if (controlDiff === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "o";
          controlDiff = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "uun";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "P":
        translated = "Kh";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "H";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "C";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "p":
        translated = "kh";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "h";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "c";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "Q":
        translated = "R";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "V";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "Sh";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "q":
        translated = "r";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "v";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "sh";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "R":
        translated = "G";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "K";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "R";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "r":
        translated = "g";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "k";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "r";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "S":
        translated = "R";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "T";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "N";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "s":
        translated = "r";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "t";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "n";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "T":
        translated = "Kh";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "D";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "R";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "t":
        translated = "kh";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "d";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "r";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "U":
        translated = "O";
        controlCons = 0;
        if (controlDiff === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "A";
          controlDiff = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "Uun";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "u":
        translated = "o";
        controlCons = 0;
        if (controlDiff === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "a";
          controlDiff = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "uun";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "V":
        translated = "G";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "Z";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "Sh";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "v":
        translated = "g";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "z";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "sh";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "W":
        translated = "Lkh";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "D";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "L";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "w":
        translated = "lkh";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "d";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "l";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "X":
        translated = "G";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "V";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "Sh";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "x":
        translated = "g";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "v";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "sh";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "Y":
        translated = "U";
        controlCons = 0;
        if (controlDiff === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "O";
          controlDiff = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "Ec";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "y":
        translated = "u";
        controlCons = 0;
        if (controlDiff === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "o";
          controlDiff = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "ec";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "Z":
        translated = "K";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "V";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "Sh";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "z":
        translated = "k";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "v";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "sh";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      default:
        translated = text.charAt(i);
        controlCons = 0;
        controlDiff = 0;
        typeSwitches = 0;

    }

    continuedTranslated = continuedTranslated.concat(translated)
    wordStart = 0
    wordEnd = 0
    previousLetter = currentletter

  }

  return continuedTranslated;

}

function countTypeSwitches(remainingWords) {

  let currentLetter = remainingWords.charAt(0)
  let previousLetter = ""
  let number = 0;

  // if at start of new word, return 0
  if (currentLetter === "" || currentLetter === " " || currentLetter === "-" || currentLetter === "." || currentLetter === "," || currentLetter === ";" || currentLetter === "!" || currentLetter === "'" || currentLetter === "?") {
    return 0
  }

  // for every remaining character in remaining words
  for (let j = 0; j < remainingWords.length; j++) {

    // establish context
    currentLetter = remainingWords.charAt(j)
    previousLetter = remainingWords.charAt(j - 1)

    if ((previousLetter === "A" || previousLetter === "a" || previousLetter === "E" || previousLetter === "e" || previousLetter === "I" || previousLetter === "i" || previousLetter === "O" || previousLetter === "o" || previousLetter === "U" || previousLetter === "u" || previousLetter === "Y" || previousLetter === "y") && (currentLetter === "B" || currentLetter === "b" || currentLetter === "C" || currentLetter === "c" || currentLetter === "D" || currentLetter === "d" || currentLetter === "F" || currentLetter === "f" || currentLetter === "G" || currentLetter === "g" || currentLetter === "H" || currentLetter === "h" || currentLetter === "J" || currentLetter === "j" || currentLetter === "K" || currentLetter === "k" || currentLetter === "L" || currentLetter === "l" || currentLetter === "M" || currentLetter === "m" || currentLetter === "N" || currentLetter === "n" || currentLetter === "P" || currentLetter === "p" || currentLetter === "Q" || currentLetter === "q" || currentLetter === "R" || currentLetter === "r" || currentLetter === "S" || currentLetter === "s" || currentLetter === "T" || currentLetter === "t" || currentLetter === "V" || currentLetter === "v" || currentLetter === "W" || currentLetter === "w" || currentLetter === "X" || currentLetter === "x" || currentLetter === "Z" || currentLetter === "z")) {
      number = number + 1
    }

    if ((currentLetter === "A" || currentLetter === "a" || currentLetter === "E" || currentLetter === "e" || currentLetter === "I" || currentLetter === "i" || currentLetter === "O" || currentLetter === "o" || currentLetter === "U" || currentLetter === "u" || currentLetter === "Y" || currentLetter === "y") && (previousLetter === "B" || previousLetter === "b" || previousLetter === "C" || previousLetter === "c" || previousLetter === "D" || previousLetter === "d" || previousLetter === "F" || previousLetter === "f" || previousLetter === "G" || previousLetter === "g" || previousLetter === "H" || previousLetter === "h" || previousLetter === "J" || previousLetter === "j" || previousLetter === "K" || previousLetter === "k" || previousLetter === "L" || previousLetter === "l" || previousLetter === "M" || previousLetter === "m" || previousLetter === "N" || previousLetter === "n" || previousLetter === "P" || previousLetter === "p" || previousLetter === "Q" || previousLetter === "q" || previousLetter === "R" || previousLetter === "r" || previousLetter === "S" || previousLetter === "s" || previousLetter === "T" || previousLetter === "t" || previousLetter === "V" || previousLetter === "v" || previousLetter === "W" || previousLetter === "w" || previousLetter === "X" || previousLetter === "x" || previousLetter === "Z" || previousLetter === "z")) {
      number = number + 1
    }

    if ((currentLetter !== "A" && currentLetter !== "a" && currentLetter !== "E" && currentLetter !== "e" && currentLetter !== "I" && currentLetter !== "i" && currentLetter !== "O" && currentLetter !== "o" && currentLetter !== "U" && currentLetter !== "u" && currentLetter !== "Y" && currentLetter !== "y" && currentLetter !== "B" && currentLetter !== "b" && currentLetter !== "C" && currentLetter !== "c" && currentLetter !== "D" && currentLetter !== "d" && currentLetter !== "F" && currentLetter !== "f" && currentLetter !== "G" && currentLetter !== "g" && currentLetter !== "H" && currentLetter !== "h" && currentLetter !== "J" && currentLetter !== "j" && currentLetter !== "K" && currentLetter !== "k" && currentLetter !== "L" && currentLetter !== "l" && currentLetter !== "M" && currentLetter !== "m" && currentLetter !== "N" && currentLetter !== "n" && currentLetter !== "P" && currentLetter !== "p" && currentLetter !== "Q" && currentLetter !== "q" && currentLetter !== "R" && currentLetter !== "r" && currentLetter !== "S" && currentLetter !== "s" && currentLetter !== "T" && currentLetter !== "t" && currentLetter !== "V" && currentLetter !== "v" && currentLetter !== "W" && currentLetter !== "w" && currentLetter !== "X" && currentLetter !== "x" && currentLetter !== "Z" && currentLetter !== "z") || j === (remainingWords.length)) {
      return number;
    }
  }

  return number

}

module.exports = {translate};
