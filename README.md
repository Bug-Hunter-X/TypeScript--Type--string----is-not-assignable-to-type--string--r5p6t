# TypeScript Type Error: 'string[]' is not assignable to type 'string'

This repository demonstrates a common TypeScript error: passing an array of strings to a function expecting a single string.

## The Bug

The `greeter` function is defined to accept a single string argument and return a greeting. However, the code attempts to pass an array of strings (`user`) to this function, resulting in a type error.

## The Solution

The solution involves either modifying the `greeter` function to handle arrays or changing how the `user` variable is handled to pass only a single string to the function.  The solution file demonstrates both approaches.