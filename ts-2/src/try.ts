// function isLegal(user: {
//     firstName: string,
//     lastName: string,
//     age: number,
// } ){
//     return user.age > 18 ? true : false;
// }

// console.log(isLegal({
//     firstName: "Sam",
//     lastName: "Vohra",
//     age: 22,
// }));

// ---------------------------------------
// interface

// interface User{
//     firstName: string;
//     lastName: string;
//     age: number;
//     email?: string;
// }

// function isLegal(user: User ){
//     return user.age > 18 ? true : false;
// }

// console.log(isLegal({
//     firstName: "Sam",
//     lastName: "Vohra",
//     age: 22,
// }));

// console.log(isLegal({
//     firstName: "Sam",
//     lastName: "Vohra",
//     age: 22,
//     email: "sam@gmail.com"
// }));


// ---------------------------------------
// interface Student{
//     name:string,
//     age?:number,
//     greet(phrase:string):void
// }

// class Person implements Student{
//     name:string;
//     age:number;
//     constructor(n:string,a:number){
//         this.name = n;
//         this.age = a;
//     }
//     greet(phrase:string){
//         console.log(`${phrase} from ${this.name}`); 
//     }
// }

// const newStudent = new Person("sam" , 21)

// newStudent.greet('hello')
// newStudent.greet('hey')

// --------------------------------------
// interface X{
//     age: number,
//     name: string
// }
// interface Y extends X{
//     greet(phrase:string):void
// }
// class Person implements Y{
//     name:string;
//     age:number;
//     constructor(n:string,a:number){
//         this.name = n;
//         this.age = a;
//     }
//     greet(phrase:string){
//         console.log(`${phrase} from ${this.name}`); 
//     }
// }

// const newStudent = new Person("sam" , 21)

// newStudent.greet('hello')

// --------------------------------------
// unions
// type Idddddd = number | string | boolean;

// function sam(id: Idddddd){
//     console.log(id);
// }

// sam(1)
// sam("1")
// sam(true)

// intersection

// type DSA = {
//     teach : string,
//     leetcode: number
// }
// type Web = {
//     teach: string,
//     project: number
// }
// type Samarth = DSA & Web;

// const sam:Samarth = {
//     teach: "samarth",
//     leetcode:122,
//     project: 32
// }

// -------------------------------


let arr = [10,20,30,40,50];

function maxi(arr: number[] ){
    let max = 0;
    for(let item of arr){
        if(item>=max){
            max = item
        }
    }
    return max;
}

maxi(arr)
// ------
interface User{
    name:string,
    age:number
}

let users = [{name:"sam",age:24} , {name:"mav", age:25}]

function isLegal(users: User[] ){
    for(let item of users){
        if(item.age>18){
            console.log(true);
        }else{
            console.log(false)
        }
    }
}
isLegal(users)