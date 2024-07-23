// const { error } = require('console');
const fs = require('fs');

// create directory
// fs.mkdir('./myFolder', function(err){
//     if(err){
//         console.log(err);
//         return
//     }
//     else{
//         console.log("Folder Created");
//     }
// })

// // const data = "Hey, this is writeFile data."
// const data = "Hey, this is new data"
// fs.writeFile("./myFolder/file.txt", data, (err)=>{
//     if(err) console.log(err);
//     else console.log("written into file");
// })

// append file 
// const data = "this is new data"
// fs.appendFile("./myFolder/file.txt", data,(err)=>{
//     if(err) console.log(err)
//     else console.log("append into file")
// })


const data = "this"
fs.appendFile("./myFolder/file.txt", data,{flag:'a'},(err)=>{
    if(err) console.log(err)
    else console.log("append into file")
})



// rename file
fs.rename("./abc.txt", "./xyz.txt", (err)=>{
    if(err) console.log(err);
    else console.log("file rename")
})