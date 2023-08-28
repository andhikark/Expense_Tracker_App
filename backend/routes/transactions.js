const router = require('express').Router();



router.get('/', (req, res) => {
    res.send('transactions route working');
})

module.exports = router;