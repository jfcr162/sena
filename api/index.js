const express = require('express');
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://corralesjhon509:nSYFfm3QruKeyNYp@cluster0.zceic.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{})
.then(()=>{
    console.log("conectado a mongoDB")
}).catch(()=>{
    console.log ("error al conectar con mogoDB")
});

const mongoSchema = new mongoose.Schema({
    nombre: String,
    direccion:String,
    telefono:Number

})
const envioInfo = async (req, res)=>{
 const registro = mongoose.model("usuario", mongoSchema);
try {
    await registro.create({
        "nombre": "juan andres",
        "direccion": "calle 83 numero ",
        "telefono": 31043770
     })
    
} catch (error) {
    console.log(error)
}
 
 res.send("registro enviado")
}


app.post("/enviar", envioInfo)
app.get("/saludo",(req, res)=>{
res.send("saludo desde el servidor")
})



app.listen(4000, (err)=>{
    if(err)console.log("error al conectar servidor")
    console.log("servidor conectado en puerto 4000")
})