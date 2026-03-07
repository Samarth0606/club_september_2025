
// let num = 10;
// num = 200;
// console.log(num);

// ---------------------

// let sam:number = 1; //automatically
// // sam = true;
// sam = 1000;
// console.log(sam);


// inference => automatically detects the type

// ---------------------------------------------

// 1. fn => greets a user => firstname

// sam = argument if.e firstname
// helllo sam

// function greet(naam:string){
//     console.log(`hello ${naam}`);
// }
// greet('sam')

// -------

// 2. fn => calculates sum of 2 numbers

// function sum(x:number,y:number):number{
//     return x+y
// }
// sum(10,20)

// ----------

// 3. return boolean => if age>18 -> true

// argument = age

// function checkAge(agee:number):boolean{
//     return agee>18 ? true : false
// }
// checkAge(17)
// checkAge(21)

// ------------

// 4. fn which takes another fn as arument

// function a(){
//     console.log(10);
//     return 100;
// }

// // function b(fn:()=>void):string{
// function b(fn:()=>number):string{
//     fn();
//     return "byee"
// }

// b(a)

// ------------------------------

// var a = 10;
// let b = 20;
// const c = 30;

// let arr = ()=>{ console.log("byee") }

// ------------------------------


function sam(x){
    console.log(x);
    
}

sam(100)