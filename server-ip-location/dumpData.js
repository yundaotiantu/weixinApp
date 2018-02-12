const FS = require('fs');
const PATH = require('path');
const mysql = require('mysql');

let path = PATH.join(__dirname,'ip.data');

let eolRegs = process.platform == 'win32'?/\r\n/:/\n/;

let pool = mysql.createPool({
    user:'root'
})

let sql = 'INSERT INTO db.ip (min,max,loc) value ?';
let index = 0;
let array = [];

FS.readFileSync(path,'UTF-8').split(eolRegs).forEach(function(line){
    let min=line.split(/\s+/)[0];
    let max=line.split(/\s+/)[1];
    let loc=line.replace(min,'').replace(max,'').trim();
    array[index++] = [min,max,loc];
});

const BACH = 10000;

 for(let i=0 ; i<array.length/10000;i++){
     let arr = array.slice(BACH*i,BACH*(i+1));
     pool.query(sql,[arr],(err,result)=>{
         if(err) throw err;
         console.log(result.affectedRows);
     });
 }


