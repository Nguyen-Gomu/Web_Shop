const express = require('express');
const body_Parser = require('body-parser');
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
const Connect = require('./config/dbConfig');
const app = express();
const port = process.env.port || 3000;

Connect();

app.use(body_Parser.json());
app.use(body_Parser.urlencoded({extended: true}));

app.use('/api', userRoute);
app.use('/api', productRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});