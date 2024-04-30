/*
* This program calculates the factorial of a number.
*
* @author  Andi Cucka
* @version 1.0
* @since   2024-04-24
*/

import java.util.Scanner;

/**
* This is the Main class.
*/
final class Main {
    /**
    * Prevent instantiation
    * Throw an exception IllegalStateException.
    * if this ever is called
    *
    * @throws IllegalStateException if instantiation is attempted
    */
    private Main() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
    * This method calculates the factorial of a given integer using recursion.
    *
    * @param randomInt the integer whose factorial is to be calculated
    * @return the factorial of the given integer
    */
    public static int factorial(int randomInt) {
        int returnValue = 0;
        if (randomInt < 0) {
            returnValue = -1;
        } else {
            if (randomInt <= 1) {
                returnValue = 1;
            } else {
                returnValue = randomInt * factorial(randomInt - 1);
            }
        }

        return returnValue;
    }

    /**
    * The starting main() function.
    *
    * @param args No args will be used
    */
    public static void main(String[] args) {
        final Scanner scanner = new Scanner(System.in);
        System.out.print("Before factoring = ");
        final int randomInt = scanner.nextInt();
        final int intFactorial = factorial(randomInt);
        System.out.println("After factoring = " + intFactorial);

        System.out.println("\nDone.");
    }
}
