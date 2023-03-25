// primitive types:
let firstName = 'Robin' // string
let age = 36 // int
let happy = true // bool
const dateOfBirth = '02.10.1986' // const can not be changed later
const PI = Math.PI

console.log(firstName, age, happy, dateOfBirth, PI)


// non primitive types (arrays and objects)
let nums = [1, 2, 3]
nums[0] = 10
console.log(nums)

let dog = {
    name: 'Elsa',
    gender: 'f',
    race: 'Parson Russel Terrier',
    age: 4
}
console.log(dog)