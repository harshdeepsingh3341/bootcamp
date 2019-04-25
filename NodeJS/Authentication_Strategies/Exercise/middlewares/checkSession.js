exports.isLoggedIn = (req, res, next) => {
    if (req.user) {

        if (req.url === '/login' || req.url === '/signup') {
            res.redirect('/');
        } else {
            next();
        }
    } else {
        if (req.url === '/login' || req.url === '/signup') {
            next();
        } else {
            res.redirect('/login')
        }
    }
};