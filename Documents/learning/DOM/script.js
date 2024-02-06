// const namesArray = [
//   "Olivia Reynolds",
//   "Liam Mitchell",
//   "Isabella Patel",
//   "Ethan Sullivan",
//   "Sophia Nguyen",
//   "Mason Taylor",
//   "Ava Cooper",
//   "Noah Hernandez",
//   "Mia Wang",
//   "Jackson Kim",
//   "Emma Clarke",
//   "Aiden Gupta",
//   "Harper Davis",
//   "Lucas Patel",
//   "Amelia Rodriguez",
//   "Logan Smith",
//   "Abigail Lee",
//   "Caleb Brown",
//   "Grace Thomas",
//   "Owen Jones",
//   "Zoe Jackson",
//   "Carter Baker",
//   "Lily Wilson",
//   "Wyatt Chen",
//   "Addison Morris",
//   "Benjamin Taylor",
//   "Scarlett Martinez",
//   "Samuel Williams",
//   "Victoria Anderson",
//   "Daniel Cooper",
// ];

// function filter() {
//   let name = "t";
//   for (let i of namesArray) {
//     if (i.includes(name)) {
//       console.log(i);
//     }
//   }
// }

// filter();

// console.log(navigator.geolocation.getCurrentPosition(success, error));
// function success(prop) {
//   console.log(prop.coords.latitude);
//   console.log(prop.coords.longitude);
// }
// function error() {
//   console.log("error");
// }

// Function with a callback

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let value = {name:
//   'parth',age:18}
//     let error = false;

//     if (error) {
//       reject(new Error("rejected"));
//     } else {
//       console.log("hello");

//       resolve(value);
//     }
//   }, 2000);
// })
//   .then((value) => {
//     console.log(value.name);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally block");
//   });

// fetch("https://api.github.com/users/iliakan")
//   .then((response) => {
//     let data = response.json();
//     return data;
//   })
//   .then((data) => {
//     console.log(data.login);
//   })
//   .catch(() => {
//     console.log(new Error("rejected"));
//   });


// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/rem',
//   'https://api.github.com/users/jeresig'
// ];

// // map every url to the promise of the fetch
// let requests = urls.map(url => fetch(url));

// // Promise.all waits until all jobs are resolved
// Promise.all(requests)
//   .then(responses => responses.forEach(
//     response => console.log(`${response.url}: ${response.status}`)
//   ));
// let promises = new Promise(function(resolve,reject){
  
//    let response= fetch('https://api.github.com/users/iliakan')
    
//        if (resolve) {
//          resolve(response)
//        } else {
//          reject(console.log(error));
//        }
// })

// async function fun(){
//   try {
//     let data = await fetch
//     ('https://api.github.com/users/iliakan')
//     console.log( await data.json());
//   } catch (error) {
      
//   }
  

// }


// fun()

// import {sayHi} from './sayHi.js';

// alert(sayHi); // function...
// sayHi('John');


