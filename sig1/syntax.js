// probeer bij verwarring onderstaande voorbeelden uit in node of in de console van je browser
// voor meer informatie kijk op http://es6-features.org/

var fun = function (num) { return num * 2 }
// is gelijk aan
var fun = (num) => { return num * 2 }

(num) => { return num * 2 }
// is gelijk aan
num => { return num * 2 }

num => { return num * 2 }
// is gelijk aan
num => num * 2

num => num * 2
// is gelijk aan
num => (
    num * 2
)

const aString = 'a string'
var anObject = { aString: aString }
// is gelijk aan
var anObject = { aString };

(num) => { return { num: num } }
// is gelijk aan
num => ({ num })

var arr = [1, 2, 3, 4]
var timesTwo = num => num * 2

arr.map(element => timesTwo(element))
// returned [2, 4, 6, 8]
// is gelijk aan
arr.map(timesTwo)


if (true === true) {
    return 1
} else {
    return 2
}
// is gelijk aan
true === true ? 1 : 2


var obj = { key1: 1, key2: 2, key3: 3, key4: 4 }

var { key1, key2, key4 } = obj
// is gelijk aan
var key1 = obj.key1
var key2 = object.key2
var key4 = object.key4


var otherObj = { ...obj }
// otherObj heeft de waarde { key1: 1, key2: 2, key3: 3, key4: 4 }
// de ... notatie heet destructuring


var { key1, key2, ...otherKeys } = obj
// set 3 vars:
// variable key1 met value 1
// variable key2 met value 2
// variable otherKeys met value { key3: 3, key4: 4 }



const string1 = 'dit is een string'
const string2 = 'dit is een string'

string1 === string2 // true

const object1 = { string: 'dit is een string' }
const object2 = { string: 'dit is een string' }

object1 !== object2 // true
// objects en arrays zijn geen primitive types zoals string, numbers en booleans
// dit heeft enkele gevolgen
// een const object en array kunnen wel worden aangepast
// een object met dezelfde key value pairs is niet hetzelfde object: de inhoud van het object wordt niet vergeleken, maar de referentie!
// pas dus op met het doorgeven van objecten, je kan per ongeluk het orginele object aanpassen! Gebruik destructuring om een kopie te maken.

object3 = object1
object3 === object1 // true
object3.string2 = 'dit is ook een string'
object1.string2 === 'dit is ook een string' // true


object4 = { ...object1 }
object4.string === 'dit is een string' // true
object4.string2 === 'dit is ook een string' // true
object4.string3 = 'nieuwe string'
object1.string3 === undefined // true






// functionele manieren om over arrays te iteraten en een nieuwe array terug te krijgen zijn praktischer en leesbaarder dan loops
// de 3 die je moet kennen zijn map, filter en reduce

const newArr = [1, 2, 3, 4, 5]

newArr.map(element => element * 2)
// returns [2, 4, 6, 8, 10]

newArr.map(e => console.log(e))
// print de cijfers naar de console
// returns [undefined, undefined, undefined, undefined, undefined]

newArr.map((e, index) => e * index)
// returns [1, 4, 9, 16, 25]

newArr.filter(e => e < 4)
// returns [1, 2, 3]

newArr.filter(e => e % 2 === 1)
// returns [1, 3, 5]

newArr.reduce((accumulator, current) => accumulator + current)
// returns 15

newArr.reduce((accumulator, current) => accumulator + current, 6)
// returns 21
// de 6 is de startwaarde van de accumulator




// imports gebruiken vaak relative file paths
// ./file betekent dat `file` in dezelfde folder staat als de js file waar je de import doet
// ../file is 1 folder omhoog
// ../../file is 2 folders omhoog
// etc

// import { iets } from 'package'
// betekent dat je enkel 1 object importeert, dit is handig om je JS files klein te houden
// je kan ook `import * as alles from 'package'` doen en dan gebruik maken van `alles.iets`, maar dan importeer je vaak veel onnodige zaken.
// wanneer je in je eigen files een `default export const iets = 1` doet kun je gebruik maken van `import iets from './file'`
// wanneer je een `export const iets = 1` doet moet je gebruik maken van `import { iets } from './file'