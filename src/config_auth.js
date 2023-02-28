import dotenv from "dotenv"
dotenv.config()

import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"

const { GOOGLE_CLIENT_SECRET, GOOGLE_CLIENT_ID } = process.env

import User from "./models/User.js"

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
  //passReqToCallback: true
},
  async (accessToken, refreshToken, profile, done) => {
    const userInfo = {
      googleId: profile.id,
      displayName: profile.displayName,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      image: profile.photos[0].value
    }

    try {
      let foundUser = await User.findOne({
        googleId: userInfo.googleId
      })
      
      if (foundUser) {
        return done(null, foundUser)
      }

      const newUser = await User.create(userInfo)
      done(null, newUser)
    } catch (err) {
      console.log(err)
      done(err, null)
    }
  }
));

passport.serializeUser((user, done) => {
  return done(null, user)
})

passport.deserializeUser((id, done) => {
  return done(null, id)
})