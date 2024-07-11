// 1-using + operator create a function 
//that combine your partner first and last name and return it.*//

// function declaration
function MyPartnerName(firstname, lastname) {
	return (firstname+" "+lastname )
}

// 2
let MultipleOf13orNot = function(n) {
	if(n % 13 === true){
		return(n ," is a multiple of thirteen")
	}
	else{
		return(n , " isn't a multiple of thirteen")
	}
}





// 3-create a function that takes a age as a parametre and return that age in seconds.*//

const  AgeInSeconds = (age) =>  {
	let days = age / 365
	let hours = days / 24
	let minuts = hours / 60
	return (minuts / 60 ," is your age in seconds")
}
//  * 4 - Write a function sameLength that accepts two strings as arguments, and returns true if those strings have the same length, and false otherwise.
//  */
const sameLength=(string1, string2)=> {
	if (string1 === string2) {
		return true
	}
	else {
		return false
	}
}
/**
 *? 5 - Write a function called (reverseStr) that takes a string as an input and returns the reverse of each letter
 *? followed by a number starting from zero(solve it using while loop).
 *? example:    reverseStr('hello'); "o0l1l2e3h4"
 *
 * @param {string} str
 * @return {string}
 */

let reverseStr = function (str){
	let string =  ""
	let i = 0
	while (i <= str.length){
		string.concat()
	}
}
/**
// * 6 Write a function called laugh() that takes one parameter,
// * num that represents the number of "ha"s to return.
// * laugh(6); => "hahahahahaha"
 *
 * @function laugh
 * @param {number} n
 * @return {string}
 */
const laugh= function (num){
	let laugh = ""
	let i = 0
	while (i <= num) {
		laugh.concat("ha")
		i++
	}
}


/**
 * 7- write a function to Reverse an array without use array.reverse() method:
 * ex: reverseArray([1,2,3]) ==> [3,2,1]
 * @function reverseArray
 * @param {array} array
 * @return {Array}
 */

let reverseArray = (array ) => {}


/**
 * 8-Given an array of integers and an integer n.
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
let findAll = (arr,n) => {}


// 9. write a function that takes a string as an argument
// and returns the string reversed word by word
// Example : reverseWord("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

let reverseWord=(string) => {

}
