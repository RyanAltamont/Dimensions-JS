// 1. Write a function that returns the sum of any two integers passed as arguments
  function addNumbers (x,y) {
    let total = x+y;
    console.log (total);
    return total;
  }

  addNumbers (6,7);
// 2. Write a function that returns the difference of the second argument from the first
  function subtractNumbers (x,y) {

    let total = y-x;
    console.log (total);
    return total;
  }
  subtractNumbers (6,7);
// 3. Write a function that allows a user to enter their name as an
// argument and returns a statement greeting them like, `Hello, Homer!`
function greetUser (greeting, userName) {
const userGreeting = `${greeting}, ${userName}!`;
console.log (userGreeting);
return userGreeting;

}

greetUser (`Hello`,`Ryan`);

// 4. Write a function that returns the product of any argument
// multiplied by itself.
  function multiplyNumbers (x,y) {
    let total = x*y;
    console.log (total);
    return total;

  }
  multiplyNumbers (7,8);

// 5. Write a  function set equal to a variable called `volume`
// that returns a value of the dimensions of a box (l*w*h) and THEN
// invoke that function in a console.log() with a message of the box's
// dimensions

function volume (l,w,h) {
  let total = l*w*h;
  console.log (total);
  return (total);



  }


console.log (`The dimensions of the box are ${volume(4,5,6)} cubic meters`);


// ^ 🔥 This is s-tier/big-brain work and not for the faint of heart 🔥
