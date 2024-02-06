// let a = 5;
// let b = (a<20) ? 20:30

// fun()
// function fun(){
// console.log('hello');
// }
// a()

// let a  = function(){
//     console.log('hello');
// }

// const a = ()=>{
//     console.log('hello');
// }

// a()

// let a = {
//     name:'aaa',
//     id:2
// }

// const a = {
//     name:'parth',
//     id:5
// }

// a.name= "vivek"
// console.log(a.name);

// let a = [1,2,3,6,6,3,6,5,7]
// for(let i in a)
// console.log(a[i]);

// let a ={}
// let b ={name:'parth'}

// Object.assign(a,b)
// a.name='ppp'
// console.log(a.name)
// console.log(b.name)

// let a = {name:'parth'}
// let b =a;
// b.name='jay'
// console.log(b.name)
// console.log(a.name)

// let b ={name:"parth"}
// let a={...b}
// b.name='jay'
// console.log(b)
// console.log(a)

// let a = {name:'parth'}
// let b = {}
// b.__proto__ = h
// console.log(b);

// let fun =()=>{
//     console.log('hello');
// }

// let a = 'helloworld'
// console.log(a.replace('e','w'));

// let a = [1,2,2,,3,5,2]
// console.log(a.at(-2));

// let a = [1,2,2,3,5,2,'parth']
// for(let i of a){
//     console.log(i);
// }

// input= [1,2,3,5,5,7]
// for(let i =1 ;i<10 ;i++){
//       input.push(i)
// }
// console.log(input);
//sum input numbers:
// let a = prompt('num 1')
// let b = prompt('num 2')

// function sum() {
//   let num = [];
//   let total = 0
//   while (true) {
//     let input = prompt("enter the number:");

//     if (input == null || input == "" || !isFinite(input)) break;
//     num.push(input);
//   }

//   for(let i of num){

//       total +=Number(i)
//   }
//   alert(total);
//   console.log(num)
// }

// let a = [1,2,3,4,,6,7,8,59]
// a.forEach(()=>{
//     for(let i of a)
//     alert(`${i}`)
// })

// let g =a.concat([3,4,5],['p'])
// console.log(g);

// sum()

// let b = a.filter(item => item <5)
// console.log(b);

// let b = a.map(index => index*2 )

// let a = Symbol('id')
// let b = Symbol('id')
// let obj = {
//     a:12,

// }

// obj.a = 25

// console.log(obj.a);

// let id1 = Symbol("id");
// let id2 = Symbol("id");

// let obj = {
//   [id1]: 15,
// };

// alert(id1);

// let id1 = Symbol()
// let obj = {
//     name:'parth',
//     [id1]: 25
// }

// for(let i in obj){
//     console.log(i);
// }


// let obj ={
//     value1:10,
//     value2:20,
//     valueof(){
//         return this.value1 + this.value2
//     }


// }


// let su = obj +1
// console.log(su);

// let obj1 = {
//     value1: 10,
//     value2: 20,
//     valueOf() {
//         return this.value1 + this.value2;
//     }
// };

// console.log(obj1.valueOf());

// let a = 'hello'
// let [f,b,c,d,e] = a
// console.log(e);

// let [a,b,c,d,e,f]= new Set([1,2,3,4,5,6])
// console.log(e);


// let obj = {
//     name:'parth',
//     id:45
// }

// for(let i in  obj){
//      console.log(obj);
// }


// let obj = {
//     name:'parth',
//     id:45
// }



// for(let [key,value] in Object.entries(obj)){
//     console.log(`${key}:${value}`);
// }





// let obj = {
//     name:'parth',
//     id:45
// }

// for(let [key ,values] of Object.entries(obj)){
//     console.log(key);
//     console.log(values);
// }

// const myObject = {
//     [Symbol("hiddenProperty")]: "This is a hidden property"
//   };
  
//   // Accessing the hidden property using the symbol
//   const symbolKey = Object.getOwnPropertySymbols(myObject);
//   console.log(myObject[symbolKey[0]]);


// let a = {
//    name:'parth',
//    age:44
// }
// let b = {
//     add:'akjsj'
// }
// Object.assign(b,a)
// console.log(b);



// let a = {
//    name:'parth',
//    add:'la',
//    age:44
// }

// let {name,add, ...rest} = Object.assign(a)
// console.log(rest);

// let arr = [1,2,3,4,5,6,7]
// let [ele,ele1, ...rest] = arr
// console.log(rest);


// try {
//     age
// } catch (error) {
//   console.log(error.message);  
// }


// let value;
// if(!value){
//     console.log(value);
// }

// try {
//     let age;
//     if(!age){ throw new ReferenceError('age is not define')}
   
// } catch (error) {
//   console.log(error.message);  
//   console.log(error.name);  
// }
// finally{
//     console.log('finally');
// }



// class demo {
//     constructor(para) {
//       this.para = para;  // Fix: Assign the parameter value to the class property
     
//     }
//     method(){
//          console.log(this.para);
//     }
//   }
  
//   let obj = new demo('hello');
//   console.log(obj.para);
//   obj.method()
  
// let arr = [1,2,3,4,5,6]

// // Property flags and descriptors:
// let ans= arr.reduce((prev,current)=>{
//     return prev+current
// })



// console.log(ans);
//class syntax
//  class name{
//     constructor(){}
//     method1(){}
//     method2(){}
//     method3(){}
//  }

//  //constructor function

//  class class_name{
//     constructor(name,age){
//         console.log(name,age);

//     }
//  }

//  let obj = new class_name('aaa',12)


// let a ={
//    name:'parth',
//    age:12
// }




// let b = {
//    fun:()=>{
//       console.log('hello');
//    }
// }

// a.__proto__ = b 

// a.fun()


// class a{
//    method1(){
//       console.log('method1');
//    }
//    method2(){
//       console.log('method2');
//    }
// }


// class b extends a{
//    method3(){
//       console.log('method3');
//    }
// }



// let obj = new b()
// obj.method1()

// let replace_div  = document.createElement('div')
// replace_div.innerHTML = 'replaced'
// let div = document.createElement('div');
//  div.className = "alert";
//  div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
//  let test =document.getElementById('test')
// test.append(div)


//setTimeout(()=>{div.replaceWith(replace_div)},3000)

// console.log(document.getElementById('all').textContent);


// for(let i of document.getElementById('all')){
//    trim_i = i.trim()
//    console.log(trim_i);
// }


export function sayHi(user) {
    alert(`Hello, ${user}!`);
  }