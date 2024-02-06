// #1 ..........
// let arr = ['apple','banana','orange']
// arr.push('grape')
// arr.shift()
// console.log(arr.includes('grape'));
// console.log(arr);

//#2.......
// let arr = [1,2,3,4,5]
// for(let i of arr){
//     console.log(i);
// }

// let arr = ['apple','banana','orange']
// for(let i of arr){
//      console.log(i.length);
// }

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let b = arr.filter(items => items%2==0)
// console.log(b);

// let arr = ['apple','banana','orange']
// let b = arr.map(items => items.length)
// console.log(b);

// let a = [
//     {name:'aaa',age:12},
//     {name:'bbb',age:14},
//     {name:'ccc',age:17},
// ]
// let b = a.find(items => items.age > 15)
// console.log(b);

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let b  = arr.some(items => items>5)
// console.log(b);

// let arr = ['orange','apple','banana','z',]
// let b= arr.sort()
// console.log(b);



// let arr = [1,2,3,4,5,6,7,8,9,10]
// let b = arr.sort(function(a, b) { return  b-a; })
// console.log(b);

// let a  = [1,2,3,4,5]
// let b = [ 6,7,8,9,10]
// let c  = a.concat(b)
// console.log(c);

// let arr = ['apple','banana','orange']
// let b =arr.slice(0,2)
// console.log(b);

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let b = arr.reduce((items,current) => items  + current)
// console.log(b);

// let arr = ['apple','banana','orange']
// let b =arr.join(',')
// console.log(b);

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let b = arr.reduce((items,current)=> (items + current)/2)
// console.log(b);

// Write a program that counts the number of occurrences of element in an array and prints the result.

// count = 0
// function fun(num,arr){
//      for(let i of arr){
//         if(i === num){
//             count+=1;
//         }
//      }
// console.log(count);
// }


// fun(2,[21,3,5,4,5,5])


// Write a program to check if a given word is a palindrome (reads the same backward as forward).

// let a = 121 
// let b =  a.toString().split('').reverse().join('')
// console.log(b);

// function palindrome(input){
     
  
//      let b = input.toString().split('').reverse().join('')

//      if(input == b ){
//         console.log('it is palindrome');
//      }

  

// }
// palindrome(121)
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
console.log(Object.keys(salaries).reduce((max,sum)=>salaries[max] > salaries[sum] ? max : sum) )