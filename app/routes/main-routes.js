// app/routes/main-routes.js
module.exports = function (router) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    router.get('/about', function (req, res) {
        // use mongoose to get all nerds in the database
        /* Nerd.find(function (err, nerds) {

         // if there is an error retrieving, send the error.
         // nothing after res.send(err) will execute
         if (err)
         res.send(err);

         res.json(nerds); // return all nerds in JSON format
         });*/
        res.render('about')
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    router.get('/contact', function (req, res) {
        //res.render('contact');
        res.render('contact', {layout: 'contacts-layout'});
    });

    router.get('/register', function (req, res) {
        //res.render('contact');
        res.render('register');
    });

    router.get('/material-paper', function (req, res) {
        //res.render('contact');
        res.render('test', {layout: 'test-layout'});
    });

    router.get('/', function (req, res) {
        res.render('register');
    });

    // frontend routes =========================================================
    // route to handle all angular requests
    router.get('*', function (req, res) {
        //res.sendfile('./public/views/index.html'); // load our public/index.html file
        res.send("404");
    });

};