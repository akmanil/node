var fs = require("fs");

fs.appendFile("newFile.txt" , "Hello world" , (err)=>{
   if(err) throw err;
   console.log("Saved !");
})
fs.open("newfile1.txt" , "w" ,(err ,data) =>{
    if(err) throw err;
    console.log("Saved!");
})
fs.writeFile("newFile1.txt" ,"Hello this is my new content writting using fs of writeFile" ,(err) =>{
    if (err) throw err;
    console.log("Saved3!");
})