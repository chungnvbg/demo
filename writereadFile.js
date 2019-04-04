var fs = require('fs');
function writeFile(path){
    return new Promise((reject,resolve)=>{
        fs.writeFile('demo.txt',path,(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }             
        })
    })
}
writeFile("helo class").then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})


function readFile(path){
    return new Promise((reject,resolve)=>{
        fs.readFile(path,'utf-8',(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }             
        })
    })
}
readFile('demo.txt').then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})

