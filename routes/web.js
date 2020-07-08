const express = require('express');
const router = express.Router();
router.get('/', (req,res) => {
   res.send('WEB-Home page')
})
//const router = express.Router();
router.get('/messages', (req,res) => {
   res.send('WEB-messages')
})
router.get('/settings', (req,res) => {
    res.send('WEB-setting page')
 })

 module.exports = router;