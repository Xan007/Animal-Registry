import users from './users.js'
import auth from "./auth.js"

export default (app) => {
    app.use("/users", users)
    app.use("/auth", auth)
}