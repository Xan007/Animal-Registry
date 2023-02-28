import pinohttp from "pino-http"
import express from "express"
import multer from "multer"
import cors from "cors"

import swagger from "swagger-ui-express"
import docs from "../docs/index.js"

import passport from "passport"
import session from "express-session"

import handleRoutes from "./routes/index.js"

import "./db/index.js"

const pino = pinohttp({
    transport: {
        target: 'pino-http-print',
        options: {
            translateTime: true
        }
    }
})

const app = express()

app.use(cors())
app.use(express.json())
app.use(pino)
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false})
    //cookie: { secure: true }}
)
app.use(passport.initialize())
app.use(passport.session())

import "./config_auth.js"

app.use('/api-docs', swagger.serve, swagger.setup(docs));

handleRoutes(app)

export default app