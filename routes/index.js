const router = require('express').Router();
const htmlPageRoute = require('./routes/htmlpage.js')
const noteRoute = require('./noteroute');

router.use('/api', noteRoute);
router.use('/', htmlPageRoute);

module.exports = router