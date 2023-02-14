const router = require('express').Router();
const apiRoutes = require('./api');

// use the "/api" route for all the API calls
router.use('/api', apiRoutes);

// catch-all route for any other requests that don't match the ones defined above
router.use((req, res) => {
    // send a response with an error message
    res.send("<h1>Wrong Route!</h1>")
});

// export the router object
module.exports = router;
