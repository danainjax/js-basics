//Event Listener practice
//addEventListener


//add event listener for submit- then
//  const wish_list = document.getElementById('wish');
//  const list_item = document.createElement('li');
 
 
 


// const bttn = document.getElementById("bttn");
// bttn.addEventListener("click", function (event) {
//   alert("YOU fuck off.");
// });

// const header = document.getElementsByTagName('h1')[0];
// header.addEventListener('dblclick', function(event) {
//     header.innerText = 'Still sore.';
// })

// const body = document.getElementsByTagName('body')[0];
// body.addEventListener('mouseover', function(event) {
//     something = document.createElement('h3');
//     something.innerText = 'Sucks';
//     body.appendChild(something);
// })

// window.addEventListener("click", () => {
//   console.log("You knocked?");
//   console.log("Again?");
// });

// let highIncome = false;
// let goodCreditScore = false;
// let eligibleforLoan = highIncome || goodCreditScore;
// let applicationRefused = !eligibleforLoan
// console.log('Eligible', eligibleforLoan);
// console.log('application refused', applicationRefused);

// let userColor = 'orange';
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;
// console.log(currentColor);

// let a = 'red';
// let b = 'blue';
// let b = a
// console.log(a);
// console.log(b);
// let hour = 10;
// const time = document.getElementById('time')
// function timeManagement(hour) {


// if (hour >= 6 && hour < 12) {
//     console.log('Good Morning');
//     newItem = document.createElement('h1');
//     newItem.innerText = 'Buenas Dias, Rosa!';
//     time.append(newItem);
    
// }
// else if (hour >= 12 && hour < 17 ) {
//     console.log("Good Afternoon");
//     newItem = document.createElement('li');
//     newItem.innerText = 'Good Afternoon, Sunshine!';
//     time.append(newItem)
// }
// else if (hour >= 17 && hour < 24) {
//     newItem = document.createElement('h4');
//     newItem.innerText = 'Good Evening'
//     time.append(newItem);
//     console.log("Good Evening");
// }
// else {
//     console.log("I have no fucking idea what time it is, bruh");
//     newItem = document.createElement('p');
//     newItem.innerText = 'I have no fucking idea what time it is, bruh';
//     time.append(newItem);
// }
// }

// let role = 'jumanji'

// switch (role) {
//     case 'guest':
//         console.log('Guest User');
//         break;

//         case 'moderator':
//             console.log('Moderator Mod');
//             break;

//             default:
//                 console.log('Unknown User');

// }

// for loop
// for (let i = 0; i <= 5; i++) {
//     console.log('Hello Dana Cheese World');
//     console.log('Souper Sunday', 'Funny Girl', i);
// }
// const newHeader = document.createElement('h4')
// const topper = document.getElementById('topper')

// for (let i = 0; i < 10; i++) {
//    newHeader.innerHTML = "delicious"
//    topper.append(newHeader)
//    console.log(newHeader)
     

// }


//while loop

// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }


// do while loop

// let i = 9
// do {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// } while (i <= 5)

// const person = {
//     name: 'Lily',
//     age: 10,
//     favoriteFood: 'Creamy Chicken',
//     favePet: 'Sally',
//     donutPick: 'glazed'
// };
// //for in to iterate over properties of an object
// for (let key in person)
//     console.log(key, person[key]);

//     const colors = ['red', 'green', 'yellow', 'blue', 'orange'];

//     for (let index in colors)
//     console.log(index, colors[index]);

//     //for of (iterate over elements in an array)

//     for (let color of colors)
//     console.log(color);

//break and continue
// 
// let number = max(5,2);
//     console.log(number);

// function max(a, b) {
//    return (a > b) ? a : b;
 
// }

// function isLandscape(width, height)
// if (width > height) {
//     return true
// } else {
//     return false
// }
// console.log(isLandscape(3,4));
// function isLandscape(width, height) {
//     return (width > height);
// }

//FizzBuzz
//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by both 3 and 5 => FizzBuzz
//Not divisible by 3 or 5 => input
//Not a number => 'Not a number'



let num;
function fizzBuzz(num) {
    
    
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz")
    }else if (num % 3 === 0) {
        console.log("Fizz");
    }else if (num % 5 === 0) {
        console.log("Buzz");
    }else if (isNaN(num)) {
        console.log("Not a number")
    }else if (typeof(num) === 'undefined') {
        console.log(num);
    } else return (num)

}
