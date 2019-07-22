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
  let currentLetter = "";
  let wordStart = 1;
  let wordEnd = 0;
  let typeSwitches = 0;

  // for every letter in the given words
  for (let i = 0; i < wordsLength; i++) {

    // establish letter context (surrounding letters)
    currentLetter = words.charAt(i)

    if (previousLetter === "" || previousLetter === " " || previousLetter === "-" || previousLetter === "'") {
      wordStart = 1
    }

    if (wordStart === 1) {
      // removes currentLetterent word, and passes along remainingWords of phrase to function
      typeSwitches = counttypeSwitches(words.substring(i, wordsLength))
    }

    if (typeSwitches > 0) {

      if ((previousLetter === "A" || previousLetter === "a" || previousLetter === "E" || previousLetter === "e" || previousLetter === "I" || previousLetter === "i" || previousLetter === "O" || previousLetter === "o" || previousLetter === "U" || previousLetter === "u" || previousLetter === "Y" || previousLetter === "y") && (currentLetter === "B" || currentLetter === "b" || currentLetter === "C" || currentLetter === "c" || currentLetter === "D" || currentLetter === "d" || currentLetter === "F" || currentLetter === "f" || currentLetter === "G" || currentLetter === "g" || currentLetter === "H" || currentLetter === "h" || currentLetter === "J" || currentLetter === "j" || currentLetter === "K" || currentLetter === "k" || currentLetter === "L" || currentLetter === "l" || currentLetter === "M" || currentLetter === "m" || currentLetter === "N" || currentLetter === "n" || currentLetter === "P" || currentLetter === "p" || currentLetter === "Q" || currentLetter === "q" || currentLetter === "R" || currentLetter === "r" || currentLetter === "S" || currentLetter === "s" || currentLetter === "T" || currentLetter === "t" || currentLetter === "V" || currentLetter === "v" || currentLetter === "W" || currentLetter === "w" || currentLetter === "X" || currentLetter === "x" || currentLetter === "Z" || currentLetter === "z")) {
        typeSwitches = typeSwitches - 1
      }

      if ((currentLetter === "A" || currentLetter === "a" || currentLetter === "E" || currentLetter === "e" || currentLetter === "I" || currentLetter === "i" || currentLetter === "O" || currentLetter === "o" || currentLetter === "U" || currentLetter === "u" || currentLetter === "Y" || currentLetter === "y") && (previousLetter === "B" || previousLetter === "b" || previousLetter === "C" || previousLetter === "c" || previousLetter === "D" || previousLetter === "d" || previousLetter === "F" || previousLetter === "f" || previousLetter === "G" || previousLetter === "g" || previousLetter === "H" || previousLetter === "h" || previousLetter === "J" || previousLetter === "j" || previousLetter === "K" || previousLetter === "k" || previousLetter === "L" || previousLetter === "l" || previousLetter === "M" || previousLetter === "m" || previousLetter === "N" || previousLetter === "n" || previousLetter === "P" || previousLetter === "p" || previousLetter === "Q" || previousLetter === "q" || previousLetter === "R" || previousLetter === "r" || previousLetter === "S" || previousLetter === "s" || previousLetter === "T" || previousLetter === "t" || previousLetter === "V" || previousLetter === "v" || previousLetter === "W" || previousLetter === "w" || previousLetter === "X" || previousLetter === "x" || previousLetter === "Z" || previousLetter === "z")) {
        typeSwitches = typeSwitches - 1
      }

    };

    if (typeSwitches < 1) {
      wordEnd = 1
    }

    if (i === (wordsLength)) {
      wordEnd = 1
    }

    switch (currentLetter) {
      case "A":
        translated = "A";
        controlCons = 0;
        if (controlDiff === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "Ei";
          controlDiff = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "Ae";
          controlDiff = 1;
          break
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
          translated = "ei";
          controlDiff = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "ae";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "B":
        translated = "Rd";
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
          translated = "R";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "b":
        translated = "rd";
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
          translated = "T";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "S";
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
          translated = "t";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "s";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "D":
        translated = "D";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "P";
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

      case "d":
        translated = "d";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "p";
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

      case "E":
        translated = "Ae";
        controlCons = 0;
        if (controlDiff === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "Ae";
          controlDiff = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "I";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "e":
        translated = "ae";
        controlCons = 0;
        if (controlDiff === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "ae";
          controlDiff = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "i";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "F":
        translated = "R";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "Th";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "S";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "f":
        translated = "r";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "th";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "s";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "G":
        translated = "Ndr";
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
          translated = "L";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "g":
        translated = "ndr";
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
          translated = "l";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "H":
        translated = "Nd";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "C";
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

      case "h":
        translated = "nd";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "c";
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

      case "I":
        translated = "O";
        controlCons = 0;
        if (controlDiff === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "Ai";
          controlDiff = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "Ai";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "i":
        translated = "o";
        controlCons = 0;
        if (controlDiff === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "ai";
          controlDiff = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "ai";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "J":
        translated = "Z";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "B";
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

      case "j":
        translated = "z";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "b";
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

      case "K":
        translated = "J";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "C";
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

      case "k":
        translated = "j";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "c";
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

      case "L":
        translated = "L";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "Jh";
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

      case "l":
        translated = "l";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "jh";
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

      case "M":
        translated = "St";
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
          translated = "S";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "m":
        translated = "st";
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
          translated = "s";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "N":
        translated = "L";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "B";
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

      case "n":
        translated = "l";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "b";
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

      case "O":
        translated = "Y";
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
          translated = "Ai";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "o":
        translated = "y";
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
          translated = "ai";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "P":
        translated = "D";
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
          translated = "R";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "p":
        translated = "d";
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
          translated = "r";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "Q":
        translated = "Z";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "C";
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

      case "q":
        translated = "z";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "c";
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

      case "R":
        translated = "S";
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
          translated = "S";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "r":
        translated = "s";
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
          translated = "s";
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
          translated = "M";
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

      case "s":
        translated = "r";
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
          translated = "r";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "T":
        translated = "R";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "S";
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
        translated = "r";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "s";
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
        translated = "E";
        controlCons = 0;
        if (controlDiff === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "Ia";
          controlDiff = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "Ia";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "u":
        translated = "e";
        controlCons = 0;
        if (controlDiff === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "ia";
          controlDiff = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "ia";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "V":
        translated = "L";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "B";
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

      case "v":
        translated = "l";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "b";
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

      case "W":
        translated = "Rd";
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
          translated = "Rn";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "w":
        translated = "rd";
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
          translated = "rn";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "X":
        translated = "Z";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "C";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "S";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "x":
        translated = "z";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "c";
          controlCons = 1;
          break
        };
        if (wordEnd === 1) {
          translated = "s";
          controlCons = 1;
          break
        };
        controlCons = 1;

        break;

      case "Y":
        translated = "Ei";
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
          translated = "Ia";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "y":
        translated = "ei";
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
          translated = "ia";
          controlDiff = 1;
          break
        };
        controlDiff = 1;

        break;

      case "Z":
        translated = "J";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "C";
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

      case "z":
        translated = "j";
        controlDiff = 0;
        if (controlCons === 1) {
          translated = "";
          break
        };
        if (wordStart === 1) {
          translated = "c";
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

      default:
        translated = text.charAt(i);
        controlCons = 0;
        controlDiff = 0;
        typeSwitches = 0;

    }

    continuedTranslated = continuedTranslated.concat(translated)
    wordStart = 0
    wordEnd = 0
    previousLetter = currentLetter

  }

  return continuedTranslated;

}

function counttypeSwitches(remainingWords) {

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
