import express from 'express'
import bodyParser from 'body-parser'
import {routerMsg} from "./routes/message.routes.mjs";
import {routerState} from "./routes/state.routes.mjs";
import {routerMod} from "./routes/modele.routes.mjs";
import {routerAuth} from "./routes/auth.routes.mjs";
import {routerStats} from "./routes/stats.routes.mjs";
import swaggerUI from 'swagger-ui-express'
import swagger from './swagger/index.mjs'
import {config} from 'dotenv'
import morgan from 'morgan'

const app = express()

config()
const port = process.env.PORT

// Body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/*+json' }))

// Swagger
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swagger))

// Console
app.use(morgan('dev'))

// Routers
app.use(routerMsg)
app.use(routerState)
app.use(routerStats)
app.use(routerAuth)
app.use(routerMod)

app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
});
