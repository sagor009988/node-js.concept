
const fs=require('fs');
// reading a file 
const readText=fs.readFileSync('./texts/read.txt','utf-8');
// console.log(readText);

// writeing a text

const writtenText=fs.writeFileSync('./texts/write.txt','utf-8',readText );

console.log(writtenText);