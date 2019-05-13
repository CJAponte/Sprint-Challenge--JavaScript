// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(peram1, peram2, cb){

  return cb(peram1, peram2)
}



/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (num1, num2)=>{
  return num1 + num2
}
const multiply = (num1, num2)=>{
  return num1 * num2
}
const greeting = (first_name, last_name)=>{
  return `Hello ${first_name} ${last_name}, nice to meet you!`
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)) // 4
console.log(consume(10,16,multiply)) // 160
console.log(consume("Mary","Poppins", greeting)) // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// I like to see it as an upside down periamide. Everything on the top flows to the bottom and can be access there but it does not work the same backwards.
// It's like a mom and her baby. A baby get's nutriance from it's mom for 9 months but the mom does not get nutriance from the baby. 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";
  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();