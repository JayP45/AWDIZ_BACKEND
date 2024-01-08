import fs from 'fs';

fs.readFile('text.text', 'utf8',(err, data)=>{
    if(err) throw err;
    console.log(data)
})