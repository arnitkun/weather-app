const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Howdy!');
});

app.listen(3000, function(){
 console.log('Anonymous app listening on port 3000.');
});
