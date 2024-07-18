// /**
//  * 2 - Write a function called counter that, when invoked, always returns a number that is one more than the previous invocation. For instance:
//  * counting(5); // => '1, 2, 3, 4, 5'
//  * counting(1); // => '1'
//  * counting(3); // => '1, 2, 3'
//  **/

let counting = (number) => {

    let i = 0
    // const start = Date.now();

    // console.log('starting timer...');

    while (i < number) {
        i++
        console.log(i)
    }
    // setTimeout(() => {
    //     const millis = Date.now() - start;
    
    //     console.log(`milliseconds elapsed = ${millis}`)}, 0);
}
let counting_recursion = (number) => {
    let i = 0
    // const start = Date.now();
    // console.log('starting timer...');
    count()
    function count() {
        if (i < number) {
            i++
            console.log(i)
            count()

        }

    }
    // setTimeout(() => {
    //     const millis = Date.now() - start;
      
    //     console.log(`milliseconds elapsed = ${millis}`)}, 0);    commented lines are for time efficency analysis 
      
}


/**
 * 3-write a function called (midElement) that takes an array as an argument and returns the element that is located in the middle of that array.
 * @param {Array<any>} array
 * @return {any}
 */

let midElement = (array) => array.at(Math.round(array.length / 2) - 1)

/**
 * 4 - write a function called (sameLength) that takes array of strings and returns an array of the strings that have the same length
 * example :  ['hi','hello','welcome','hy'] ==> ["hi","hy"]
 *
 * @param {Array<string>} array
 * @return {Array<string>}
 */


let sameLength = function (array) {

}

/**
 * 5. Given an array of integers and an integer n.
 * find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
 * If n is not in the given array, return an empty array [].
 * Assume that n and all values in the given array will always be integers.
 * Example:
 * findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
 *
 * @param {Array} array
 * @param {number} n
 * @return {Array}
 */


let findAll = function (array, n) {

};

// 6. write a function that takes a string as an argument
// and returns the string reversed word by word
// Example : reverseWord("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

let reverseWord = (string) => {

}


//7.Write a function called sumOfFirstAndLast that 
//takes a number as a parameter and returns the sum of the first and last digits. Please do this without turning the number into a string.

function sumOfFirstAndLast(number) {

}

/**
 * 8 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
 * objKey({name:'ahmed',age:20}) ==> ['name','age']
 *
 * @function objKey
 * @param {Object} obj
 * @return {Array}
 */

let objKey = (object) => {

}

/**
 * 9 - Write a function named objLength to get the length of a JavaScript object
 * objLength({name:'ahmed',age:20}) ==> 2
 *
 * @function objLength
 * @param {Object} obj
 * @return number
 */
let objLength = (obj) => { }
