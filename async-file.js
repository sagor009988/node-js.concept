const fs=require('fs');

//readtext async
fs.readFile('./texts/read.txt','utf-8',(err,data)=>{
    if(err){
        throw Error('error reading text')
    }
 

    fs.writeFile('./texts/read2.txt',data,'utf-8',(err)=>{
        if(err){
            throw Error('error wtiting')
        }
    })
})
console.log('data');