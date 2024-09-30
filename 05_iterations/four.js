// forin loop:

const myObject = {
     "js": "javascript",
     "py":"python",
     "rb":"ruby",
     "cpp":"c++"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java"]
for (const key in programming) {
    console.log(programming[key]);
}


/* const map = new Map()
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN', "India")

for (const key in map) {
     console.log(key)
}  */                                  // Maps are not iteratable in for-In loops