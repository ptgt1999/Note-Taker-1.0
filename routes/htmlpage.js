const router = require('expres').Router();
const path = require('path');

router.get('../public/notes.html', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/notes.html'));
});

module.exports = router;