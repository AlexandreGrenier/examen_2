const fs = require("fs");
const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID;
const app = express();
app.set('view engine', 'ejs'); // générateur de template 
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))  // pour utiliser le dossier public
app.use(bodyParser.json())  // pour traiter les données JSON



///etape 3

var db 

MongoClient.connect('mongodb://127.0.0.1:27017/carnet_adresse', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(8081, () => {
    console.log('connexion à la BD sur le port 8081')
  })
})

app.get('/',  (req, res) => {
   console.log('la route route get / = ' + req.url)
 
    var cursor = db.collection('provinces').find().toArray(function(err, resultat){
       if (err) return console.log(err)

    res.render('index.ejs', {provinces: resultat})

    }) 
    

})

//etape 4
app.get('/ajouter',  (req, res) => {
		
		db.provinces.insert({
			code : "QC",
			nom : "Québec",
			capital: (Math.floor(Math.random() * 200) + 100).toString()
		})
		res.redirect('/')
})

//etape 5
app.get('/detruire', (req, res) => {

 db.provinces.drop()
 
 res.redirect('/')  
})

//etape 6
app.get('/etape6', (req, res) => {

 db.createCollection("provinces");
 
 
  
})
