// let a = new Object();
// a.hasOwnProperty()
// const person = {
//     name: "John",
//     age: 30,
//     address: {
//       city: "Anytown",
//       zipCode: "12345"
//     }
//   };

  
// const {name,age} = person;
// console.log();

// const person = {
//     name: "John",
//     age: 30,
//     address: {
//       city: "Anytown",
//       zipCode: "12345"
//     }
//   };
  
//   // Destructuring assignment
//   const { name:p,address:{city,zipCode}} = person;
  
//   console.log(p); // Output: John
//   console.log(city);  




// //   const {...res} = person
// //   console.log(res.name);

  
// console.log(person.clientname)


// let a = 20;
// let b = 50;


// let c = a?? 30 ?? b
// console.log(c);

// let date = new Date()
//   console.log(date.getSeconds());

// console.log(Object)

// const person = {
     
//     name: "John",
//     age: 30,
//     clientname:this.name,
//     address: {
//       city: "Anytown",
//       zipCode: "12345"
//     },
//     valueOf:function(){
//         return 20
//     },
 
//   };
 
// console.log(person?.name?.p || 
// function fun(){
//     if(typeof(person.name) === 'string'){
//     console.log('ok');
    

// }

// }

// fun()


// let obj ={}  ........#1
// function isEmpty(){
//     for(let i in obj){
//         return false
//     }
// return true   
// }

// isEmpty()


// let salaries = {   ......#2
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//   let sum = 0
//   function fun(){
//     for (let i in salaries){
//         sum += salaries[i]
    
//     }
//     return sum
//   }


//   let a = fun()
//   console.log(a);



// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// function  multiplyNumeric(){     .........#3
//     for (let i in menu){
//          if(typeof(menu[i]) === 'number'){
//                 menu[i]= menu[i]*2
         
//          }
//          else{
//             continue
//          }
//     }
//     return menu 
// }

// let a = multiplyNumeric()
// console.log(a);




// let a = Number(prompt('num1'))
// let b = Number(prompt('num2'))
// let inputs ={
//     num1:a,
//     num2:b
// }

// function cal(){
//   return a*b

// }


// let sum = cal()
// console.log(sum);

// let a =function sum(){
//     console.log('hello');
// }

// sum()


// //   console.log(isNaN());
// let a = 'Hello, World!'
// // let b =a.trim(' ')
// console.log(b);
// console.log(a)




// console.log(a.split(',')  );

// Function to print a pyramid pattern of stars
// function printPyramid(rows) {
//     for (let i = 1; i <= rows; i++) {
//         // Print spaces before the stars
//         for (let j = 1; j <= rows - i; j++) {
//             process.stdout.write(" ");
//         }

//         // Print stars for the current row
//         for (let k = 1; k <= 2 * i - 1; k++) {
//             process.stdout.write("*");
//         }

//         // Move to the next line after each row
//         console.log();
//     }
// }

// // Specify the number of rows for the pyramid
// const numberOfRows = 5;

// // Call the function to print the pyramid pattern
// printPyramid(numberOfRows);

for (let i = 1;i<=10;i++){
    console.log(i);

}