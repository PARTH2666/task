// for (let i = 1;i<=10;i++){
//     console.log(i);

// } .....#1

// for (let i = 10;i>=1;i--){
//     console.log(i);

// }  ......#2

// for(let i = 1;i<=20;i++){
//     if(i%2==0){
//         console.log(i)
//     }
//     else{
//         continue
//     }
// } .....#3

// for(let i = 1;i<=20;i++){
//     if(i%2==0){
//        continue
//     }
//     else{
//         console.log(i)
//     }
// }  ... 4

// j = 0;
// for (let i = 0; i <= 5; i++) {
//   j += i;
// }
// console.log(j); .... #5


// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } 
//   else {
//     return n * factorial(n - 1);
//   }
// }

// let result = factorial(5);
// console.log(result); ......#6

// sum=0
// let arr= [1,2,3,4,5,6]
//     for(let i in arr){
//        sum+=arr[i]
//     }
  

// console.log(sum);.......#7


// let b = ''
// let a = ['hello','world','skdhjhd']
// for(let i in a){
//      b+=a[i]
// }

// console.log(b);.......#8


// console.log('occurence of element `${arr[i]}` is `${k}`');
// k = 0
// function occur(arr){
//      for (let i in arr){
//         for(arr[i] in arr){
//          k+=1
//       }
//          k=0

//          console.log(`occurence of element ${arr[i]} is ${k}`);
//      }
// }

// let obj = {
//     name:'parth',
//     age:25
// }

// console.log(Object.entries(obj));

// let b =Object.entries(obj)
// console.log(b[0][0]);


let myDate = new Date();

// Set the time to January 1, 2023, 12:30:00
myDate.setTime(new Date('2023-01-01T12:30:00').getTime());
console.log(myDate.getHours());
console.log(myDate);

