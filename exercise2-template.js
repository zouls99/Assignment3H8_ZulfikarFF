/**
Diberikan sebuah function yang menerima satu parameter berupa string. 
Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang berjarak 3 karakter lain (termasuk spasi). 
Jika tidak ditemukan sama sekali, kembalikan nilai false.

Contoh: 
barbarian akan mengembalikan nilai true
you are boring akan mengembalikan nilai true
bacon sand meat akan mengembalikan nilai false

 */

function threeStepsAB(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a') {
            if (text[i + 4] === 'b' || text[i - 3] === 'b') {
                return true;
            }
        }
    }
    return false;
}

// testing
// let text1 = "lane borrowed";
// console.log(threeStepsAB(text1));

// Test Cases
console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon and meat")); // false


