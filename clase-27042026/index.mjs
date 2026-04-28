import express from "express";

const app = express();
const PUERTO = 3000;

function middleware(req, res, next) {
    console.log("Se pudo correr el middleware")
    next()
}

// app.use(middleware)
app.use(express.static("front"))

app.get('/', (req, res) => {
    res.send("Bienvenidos")
})



app.get('/saludo', (req, res) => {
    res.send("Bienvenidos")
})

app.listen(PUERTO , () => {
    console.log(`http://localhost:${PUERTO}` )}
)