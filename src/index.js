const express = require('express');
const bodyParser = require('body-parser');
const route = require('./router/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Pawankanyal1:6Ntt9WQRMlMCVLPc@cluster0.g2udp.mongodb.net/Project3_BookManagement_Site-DB" , {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
