/*
* This program calculates the factorial of a number.
*
* @author  Andi Cucka
* @version 1.0
* @since   2024-04-24
*/

import { createPrompt } from 'bun-promptx'

function factorial(someInt: number): number {
  /*
  * This function calculates the factorial using recursion.
  */
  if (someInt < 0) {
    return -1
  } else {
    if (someInt <= 1) {
      return 1
    } else {
      return (someInt * factorial(someInt - 1))
    }
  }
}

const userInput = createPrompt(`Entered = `)
const someInt = parseInt(userInput.value)
let factorialOfInt = factorial(someInt)
console.log(`Returned = ${factorialOfInt}`)

console.log(`\nDone.`)
