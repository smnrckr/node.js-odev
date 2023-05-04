import * as fs from 'node:fs';
//OLUŞTURMA
fs.writeFile('employees.json','{"name":"Employee1 Name", "salary":"2000" }','utf8',(err,data)=>{
    if(err) console.log(err);
    console.log("employees.json dosyası oluşturuldu ve veriler eklendi");
});


//OKUMA
fs.readFile('employees.json','utf8',(err,data)=>{
    if(err) console.log(err);
    console.log(data);
    console.log("employees.json dosyası okundu");
});


//VERI EKLEME
fs.appendFile('employees.json',',\n{"name":"Employee2 Name", "salary":"3000"}' ,'utf8',(err,data)=>{
    if(err) console.log(err);
    console.log("Veriler eklendi");
})


//DOSYA SILME
fs.unlink('employees.json',(err)=>{
    if(err) console.log(err);
    console.log("Dosya Silindi");
});