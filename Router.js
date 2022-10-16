const bcrypt = require('bcrypt');

class Router {

    constructor(app, db) {
        this.login(app, db);
        this.logout(app, db);
        this.isLoggedIn(app, db);
    }
    login(app, db) {

        app.post('/login', (req, res) => {

            let username = req.body.username
            let password = req.body.password

            username = username.toLowerCase();

            if (username.length > 12 || password.length > 12) {
                res.json({
                    success: false,
                    msg: 'an errors occured, please try again'
                })
                return;
            }

            let cols = [username];
            db.query('eselect * FROM user WHERE username = ? LIMIT 1', cols(err, data, fields) => {


                if(err) {
                    res.json({
                        msg: 'an error occcured, please try agaoin'
                    })
                    return;
                }

                //found 1 user with username

                if(data && data.length === 1){
                bcrypt.compare(password, data[0].password, (bcrypt, verified) => {
                
        })

    }

});


    });

}


logout(app, db){

}

isLoggedIn(app, db){

}

}

module.exports = Router;