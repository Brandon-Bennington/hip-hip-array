/* This assignment will give you some practice with creating arrays and using their methods. */

// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//

console.log("\nChallenge 1")
//
// Loop through the following array, console.logging out each value.
const students = [
  '(0)Tre',
  '(1)Sonny',
  '(2)Crystal',
  '(3)Ilyas',
  '(4)Greg',
  '(5)Fernando',
  '(6)Timothy',
  '(7)Patrick',
  '(8)Steve',
  '(9)Jimothy',
  '(10)Pat',
  '(11)Arnold',
  '(12)Andy'
];

let a = 0; 
while(a < students.length){
    console.log(students[a]);
    a++
}

console.log('\n')
console.log("Challenge 2")
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];
let newGrades = grades.reverse()

let b = 0; 
while(b < newGrades.length){
    console.log(newGrades[b]);
    b++
}

console.log('\n')

console.log("Challenge 3")
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
const even = positiveNumbers.filter(num =>  num % 2 === 0)

let c = 0; 
while(c < even.length){
    console.log(even[c]);
    c++
}

console.log('\n')

console.log("Challenge 4")
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
const mixedEven = mixedSignNumbers.filter(num =>  num % 2 === 0)

let d = 0; 
while(d < mixedEven.length){
    console.log(mixedEven[d]);
    d++
}

console.log('\n')

console.log("Challenge 5")
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
symmetricalCapitals.shift()
symmetricalCapitals.shift()
symmetricalCapitals.pop()



let e = 0; 
while(e < symmetricalCapitals.length){
    console.log(symmetricalCapitals[e]);
    e++
}

console.log('\n')

console.log("Challenge 6")
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
fibonacciNumbers.unshift(8)
fibonacciNumbers.splice(-1, 1, 13 ,52)
fibonacciNumbers.splice(-1, 0 ,23)

let f = 0; 
while(f < fibonacciNumbers.length){
    console.log(fibonacciNumbers[f]);
    f++
}



console.log('\n')

console.log("Challenge 7")
// Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.

const easyPeasy = [1, 2, 3, 4, 5]

let g = 0; 
while(g < easyPeasy.length){
    console.log(easyPeasy[g]);
    g++
}

console.log('\n')

console.log("Challenge 8")
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
const emptyArray = []
emptyArray.unshift("Beatles")
emptyArray.push("The Doors")
emptyArray.push("Hendrix")
emptyArray.push("Nirvana")
emptyArray.push("David Bowie")

let h = 0; 
while(h < emptyArray.length){
    console.log(emptyArray[h]);
    h++
}

console.log('\n')

console.log("Challenge 9")
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.


let i = 3; 
while(i < 11){
if(i < students.length)
    console.log(students[i]);
    i++
    
}

console.log('\n')

console.log("Challenge 10")
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.

let newArray = []
z=3
w=0
while(z < 11){
 newArray.push(students[z])
  console.log(newArray[w])
  w++
  z++
}
console.log('\n')


console.log("Challenge 11")
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.

let copyArray2 = students.slice(3,11)

let k= 0;
while(k < copyArray2.length){
    console.log(copyArray2[k]);
    k++
}
console.log('\n')


m = 0  
while(m < students.length){
    console.log(students[m]);
    m++
}

console.log('\n')


console.log("Challenge 12")
console.log('\n')

// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
dinosaurs.splice(4, 3)

dino = 0
while(dino < dinosaurs.length){
  console.log(dinosaurs[dino]);
  dino++
}


console.log('\n')

console.log("Challenge 13")
console.log('\n')
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.

console.log(dinosaurs.join(" * "))

console.log('\n')

console.log("Challenge 14")
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
const OGdinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

console.log(OGdinosaurs.reverse())
console.log('\n')
console.log(OGdinosaurs)

console.log("Challenge 15")
console.log('\n')
// Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];

let allElements = primaries.concat(secondaries)
z = 0 
while(z < allElements.length){
  console.log(allElements[z]);
  z++
}
console.log('\n')
console.log(primaries)
console.log('\n')
console.log(secondaries )
console.log('\n')