const { fstat } = require('fs')
const http = require('http')
const fs = require('fs')
const mongodb = require('mongodb').MongoClient


const express = require('express')

const port = 1000
const port2 = 2000

const app = express()

app.listen(port)
app.get('/contacto', function(req, res){
    res.end('Desde acá vamos a contactarnos')
})

const server = (req, res) => {
    fs.readFile('front/index.html', (error, content)=> {  //parametros para configurar el servidor
        console.log(error)

        if(error){
            res.writeHead(404, { 'Content-Type' : 'text/plain'})
            res.end('Pagina no encontrada')
        } else {
            res.writeHead(200, {'Content-Type' : 'text/html'})
        }
    })

}

http.createServer(server).listen(port2) //configuro las propiedades del servidor
