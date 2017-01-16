var   router = require('express').Router();
var handlers = require('./handlers');

router.get('/', handlers.versioninfo);
router.post('/', handlers.versioninfo);
router.post('/login', handlers.login);



module.exports = router;