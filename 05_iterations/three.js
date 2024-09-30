// for of loop:

// ["","",""]
// {{},{},{}}

let arr = [1, 2, 3, 4, 5]
for (const num of arr) {                     // for of loop will automatically applies the conditions and all everything
    console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`value of each char ${greet}`);
}


/* Map:
 The Map object holds key-value pairs and remembers the original insertion order of the keys.
 Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. */
const map = new Map()
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN', "India")

console.log(map);

/* o/p:     Map(3) {
               'IN' => 'India',
               'USA' => 'United States of America',
               'FR' => 'France'
} */

// for of loop of map:
for (const [key, value] of map) {                     
    console.log(key, ':-',value);
}

/* o/p:   IN :- India
          USA :- United States of America
          FR :- France     
*/