const express=require('express') //
//const bodyParser=require('body-parser') // pour parser les données de la requête
const mongoose=require('mongoose') // pour la connexion à la base de données

const app=express();

// import client schema from client.model.js 
const Client=require('./app/model/client.model');
//app.use(bodyParser.urlencoded({extended:true})); // pour parser les données de la requête
//app.use(bodyParser.json()); // pour parser les données de la requête
mongoose.connect('mongodb+srv://protechgabes:iQYVAUCyL9sZ7Aez@cluster0.hfjjthx.mongodb.net/serviceCl',
 {useNewUrlParser: true, useUnifiedTopology: true}
 ).then(()=>console.log("connected to database"))
    .catch((err)=>console.log(err));
  // connexion à la base de données
// instanciation de client
let client=new Client({
nom:"salmi",   
prenom:"ahmed",
email:"ahmed@gmail.com",
password:"009933",
tel:"12345223",
});
// enregistrement de client dans la base de données
/*client.save()
.then((data)=>console.log(data))
.catch((err)=>console.log(err))
*/
// récupération de tous les clients
/*
Client.find().then((data)=>console.log(data))

.catch((err)=>console.log(err));
*/
// récupération d'un client par son email et mot de passe
/*Client.findOne({email:"ahmed@gmail.com",password:"009933"}).then((data)=>console.log(data))
.catch((err)=>console.log(err));
*/
// récupération d'un client par son id
/*
Client.findById("6437f807a30088b0bb7bc683").then((data)=>console.log(data))
.catch((err)=>console.log(err));
*/
// mise à jour d'un client par son id
/*
 Client.findByIdAndUpdate("6437f807a30088b0bb7bc683",{email:"ahmed@live.fr"}).then((data)=>console.log(data))
 .catch((err)=>console.log(err));
*/
// suppression d'un client par son id
 Client.findByIdAndDelete("6437f807a30088b0bb7bc683").then((data)=>console.log(data))
// la machine actuelle => localhost ou 127.0.0.1
app.listen(4000, ()=>console.log("server is running on port 4000"));