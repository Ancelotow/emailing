import express from 'express'
import bodyParser from 'body-parser'
import swaggerUI from 'swagger-ui-express'
import {routerMsg} from "./routes/message.routes.mjs";
import {config} from 'dotenv'
import morgan from 'morgan'

const app = express()

config()
const port = process.env.PORT

// Body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/*+json' }))

// Console
app.use(morgan('dev'))

// Routers
app.use(routerMsg)

app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
});
