// blocking and non-blocking
// blocking code -> sync code
// fs.readFileSync fs.writeFileSync
// const fs = require('fs')  //for file read

// const data = fs.readFileSync('./t.txt', 'utf-8')

// console.log(data);

// let sum =0;
// for(let i =1; i<=10; i++){
//     sum = sum+i;
// }

// console.log('sum',sum)


// non-blocking code ]
// fs.readFile fs.writeFile


// congrency code

const fs = require('fs')  //for file read

const data = fs.readFile('./t.txt', 'utf-8', (err,data)=>{
    console.log(data);
})

let sum =0;
for(let i =1; i<=10; i++){
    sum = sum+i;
}

console.log('sum',sum)