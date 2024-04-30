/*
* This program calculates the factorial of a number.
*
* @author  Andi Cucka
* @version 1.0
* @since   2024-04-24
*/

import { createPrompt } from 'bun-promptx'

function factorial(randomInt: number): number {
  /*
  * This function calculates the factorial using recursion.
  */
  if (randomInt < 0) {
    return -1
  } else {
    if (randomInt <= 1) {
      return 1
    } else {
      return (randomInt * factorial(randomInt - 1))
    }
  }
}

const userInput = createPrompt(`Before factoring = `)
const randomInt = parseInt(userInput.value)
let IntFactorial = factorial(randomInt)
console.log(`After factoring = ${IntFactorial}`)

console.log(`\nDone.`)
