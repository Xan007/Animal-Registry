export const ensureAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/');
}

export const ensureGuest = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return next()
    }

    res.redirect('/dashboard');
}

export default {  
    ensureAuth,
    ensureGuest
}