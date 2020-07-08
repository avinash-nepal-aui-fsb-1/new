const express = require('express');
const app = express();
app.use('/web', require('./routes/web'))
app.use('/blog', require('./routes/blog'))

app.listen(3010, () => console.log('Server Started'));
