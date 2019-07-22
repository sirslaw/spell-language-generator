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

const translateIntoGoblin = require('./languages/ghukliak.js').translate;
const translateIntoElvish = require('./languages/elvish.js').translate;
const translateIntoQuor = require('./languages/quor.js').translate;

const phrase = 'hello world';

console.log(`translating '${phrase}' into...`);
console.log(`\nGhukliak (Goblin):`, translateIntoGoblin(phrase));
console.log(`\nElvish (Elf):`, translateIntoElvish(phrase));
console.log(`\nQuor (Quori):`, translateIntoQuor(phrase));
