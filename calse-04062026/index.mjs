import express from 'express'
import multer from 'multer'
import { nanoid } from 'nanoid'
import mime from 'mime-types'


const app = express()

app.use('/front', express.static('./front'))
app.use('/uploads', express.static('./uploads'))

const storageDisk = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const nuevoNombre = nanoid() + '.' + mime.extension(file.mimetype) // Genera un nombre aleatorio con la extension del archivo
      cb(null, nuevoNombre)
    }
  })
  
// Multer
const storage = multer({
    storage: storageDisk
    //dest: 
})

const gestorUpload = storage.single('archivo')

app.post('/upload', (req, res) => {
    gestorUpload(req, res, (err) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Error al subir el archivo'
            })
        }
    })
    console.log(req.file)
    return res.json({
        mensaje: 'Archivo subido correctamente'
    })
})

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000')
})