// 1
let user = {
    name: "John",
    years: 30
  }

  var{name, years}= user;
  var isAdmin = false; 

  console.log(name,years);
  console.log(isAdmin);

  // 2

  const  ourPlanet = 'earth';
  let visitor = '';

  3// 

//  let phrase = "Hello"

// if (true) {
//   let user = "John";
//   function sayHi() {
//     alert(`${phrase}, ${user}`)
//   }
// }

// sayHi()

            /*  1- The function sayHi() is declared inside the if condition, which is a block and we are trying 
            to call it outside the block*/


//4 

let user1 = {
    name : 'john',
    surname :'Smith'
}

user1.name='pete';

console.log(user1);


//5 
// Is it possible to change an object declared with const, how do you think and why?

// const user = {
//   name: "John"
// }

// // does it work?
// user.name = "Pete"

                        // can't change the const variable.

//6 
let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
  }

  let sumSalaires = salaries.Fred + salaries.Ted + salaries.Ghaith ;

  console.log(sumSalaires);

 // 7

 let result = (a + b < 4) ?  'Below': result = 'Over'

// 8

let message = 'Employee' ? 'Hello' : 'Director' ? 'Greetings' : 'No login' ;

