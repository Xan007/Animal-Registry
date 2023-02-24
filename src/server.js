import dotenv from "dotenv"
dotenv.config()

import app from "./app.js"

const server = app.listen(process.env.PORT, function() {
    console.log(`Server is running on port ${process.env.PORT}`)
})

export default server