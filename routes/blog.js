const express = require('express');
const router = express.Router();
router.get('/', (req,res) => {
   res.send('blog-Home page')
})
//const router = express.Router();
router.get('/authors', (req,res) => {
   res.send('blog-authors')
})
router.get('/:name', (req,res) => {
    res.send(`blog-Hello I am ${req.body.name}`)
 })

 module.exports = router;