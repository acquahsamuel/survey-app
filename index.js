const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send({
        hi: ' Hello world '
    })
});


const PORT = process.env.PORT || 5000;

app.listen(PORT ,()=>{
   `App is runing on ${PORT} hosted on Heroku` 
});

