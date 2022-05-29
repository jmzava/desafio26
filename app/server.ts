import 'dotenv/config'
import express from 'express'
import app from './src/app'

app.set('views', __dirname + '/public/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

declare module 'express-session' {
    interface SessionData {
        nombreUsuario:string
    }
}

const PORT = process.env.PORT
app
    .listen(PORT, () => console.log(`http://localhost:${PORT}`))
    .on('error', err => console.log(err))
    