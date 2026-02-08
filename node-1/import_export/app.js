export let kuchbhi = "Sammy boi"

export function add(a,b){
    return a+b
}

export let obj = {
    a: 10,
    fn: function(){
        console.log("code_baithak");
    }
}

// module.exports = {} // by default 
// module.exports = {a:kuchbhi,b:obj,c:add} 
// module.exports = {
//     kuchbhi: kuchbhi,
//     obj: obj,
//     add: add
// } 
//commonjs
// module.exports = {
//     kuchbhi,
//     obj,
//     add
// } 

// esmodule


console.log(kuchbhi , "1");

console.log( add(40,80) , "1" );

console.log(obj , "1");