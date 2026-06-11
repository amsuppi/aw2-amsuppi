import jwt from 'jsonwebtoken';

const datosUtiles = {
    uruario: 'andres',
    rol: 0
}
jwt.sign(datosUtiles, 'clavesercreta', {
    expiresIn:'1h'
}, (err, token) => {
    if(err) {
        return console.log(err)
    }
    console.log(token);

    jwt.verify(token, 'clavesercreta', (err, payload)=> {
        if(err) {
            return console.log(error)
        }

        console.log(payload)
    } )
})