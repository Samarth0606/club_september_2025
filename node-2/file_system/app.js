// console.log("hello");

// const fs = require('fs');
// // CREATE
// // let dataaa = "I am Samarth Vohra, code_baithak";
// // fs.writeFileSync('mav.txt' , dataaa)
// // fs.writeFileSync('sam.txt' , dataaa , {encoding: 'utf-8'})  //sync way


// // fs.writeFile('code.txt' , "welcome to nodejs", {} , (err)=>{   //async way
// //     if(err) throw err;
// //     else{
// //         console.log("Data written successfully");
// //     }
// // })

// -----------------------------------------------

// READ
// const result = fs.readFileSync('code.txt' , {encoding: 'utf-8'}) //1st way
// const result = fs.readFileSync('code.txt' , 'utf-8' )
// const result = fs.readFileSync('code.txt' , {})      //sync
// console.log(result.toString() , "result"); //2nd way

// fs.readFile('sam.txt' , {encoding:'utf-8'} , (err,data)=>{
// fs.readFile('sam.txt' , 'utf-8' , (err,data)=>{
// fs.readFile('sam.txt' , {} , (err,data)=>{
//     if(err) throw err;
//     else{
//         console.log(data.toString() , "data");
//     }
// })

// UPDATE
// fs.appendFileSync('mav.txt' , "\nLet me sleep you hooman 🐕") //sync

// fs.appendFile('sam.txt' , "\nFinally youtube video is out", {} , (err)=>{
//     if(err) throw err;
//     else{
//         console.log("File updated");
//     }
// })

// DELETE
// fs.unlinkSync('code.txt')
// fs.unlink('mav.txt', (err,resp)=>{
//     if(err) throw err;
//     else{
//         console.log("file deleted successfully"); 
//     }
// })

// fs.writeFile('code.txt' , "welcome to nodejs", {} , (err)=>{   //async way
//     if(err) throw err;
//     else{
//         console.log("Data written successfully");
//     }
// })

// -----------------------

// sync = blocking
// async = non-blocking


// const fs = require('fs');
// READ
// console.log(1);
// const result = fs.readFileSync('sam.txt' , {})    //blocking
// console.log(result.toString() , "result"); 
// console.log(2);
// console.log(3);

// console.log(1);
// fs.readFile('sam.txt' , {} , (err,data)=>{
//     if(err) throw err;
//     else{
//         console.log(data.toString() , "data");
//     }
// })
// console.log(2);
// console.log(3);