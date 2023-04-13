// ce code génere le schema de la base de données pour client
// client caractérisé par son nom, son prénom, son email, son mot de passe, son numéro de téléphone
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let Client=new Schema({
    nom:{ 
        type:String,
        required:true,
    },
    prenom:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    tel:{   
        type:String,
        required:false, // pas obligatoire (optionnel)
    },
});
module.exports=mongoose.model('Client',Client);