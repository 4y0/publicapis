var   router = require('express').Router();
var handlers = require('./handlers');

router.get('/', handlers.versioninfo);
router.post('/', handlers.versioninfo); 



module.exports = router;