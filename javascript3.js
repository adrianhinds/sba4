/* export default class User {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
}

export function printName(user) {
    console.log(`User's name is ${user.age}`)
}
export function printAge(user) {
    console.log(`User is ${user.age} years old`)
}

export { printName, printAge} 
*/
export function add(numbers) {
    let sum = 0;

    for (const n of numbers) {
        sum += n;
    }

    return sum;
}
