import pinohttp from "pino-http"
import express from "express"
import multer from "multer"
import cors from "cors"

import swagger from "swagger-ui-express"
import docs from "../docs/index.js"

import handleRoutes from "./routes/index.js"

const pino = pinohttp({
    transport: {
        target: 'pino-http-print',
        options: {
            destination: 1,
            all: true,
            translateTime: true
        }
    }
})
const app = express()

app.use(express.json())
app.use(cors())
app.use(pino)
app.use('/api-docs', swagger.serve, swagger.setup(docs));

handleRoutes(app)

export default app