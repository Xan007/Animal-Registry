import passport from "passport"
import { Router } from "express"

const router = Router()

router.get(
    "/google", 
    passport.authenticate("google", { 
        scope: [ "profile" ] 
    })
)

router.get(
    "/google/callback",
    passport.authenticate('google', { 
        failureRedirect: "/", successRedirect: "/dashboard" 
    })
)

router.get("/logout", (req, res, next) => {
    req.logout()
    res.redirect("/")
})

export default router