var fs = require("fs");

//this is used for create a file and update file
fs.appendFile("newFile.txt" , "Hello world" , (err)=>{
   if(err) throw err;
   console.log("Saved !");
})
//this file is used for create a file only
fs.open("newfile1.txt" , "w" ,(err ,data) =>{
    if(err) throw err;
    console.log("Saved!");
})
//this is used for create a file and update file
fs.writeFile("newFile1.txt" ,"Hello this is my new content writting using fs of writeFile" ,(err) =>{
    if (err) throw err;
    console.log("Saved3!");
})
//this is used for delete a file
fs.unlink("newFile1.txt" ,(err)=> {
    if(err) throw err;
    console.log("File Deleted");
})