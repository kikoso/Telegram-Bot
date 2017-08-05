var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const axios = require('axios')

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
  extended: true
})); 

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

app.post('/new-message', function(req, res) {
  const {message} = req.body


  var x = message.text
  var y = replaceAll(x,'a','i')
  y = replaceAll(y,'e','i')
  y = replaceAll(y,'o','i')
  y = replaceAll(y,'u','i')
  y = replaceAll(y,'A','I')
  y = replaceAll(y,'E','I')
  y = replaceAll(y,'O','I')
  y = replaceAll(y,'U','I')
	
  axios.get('https://api.telegram.org/TOKEN/sendMessage?chat_id='+message.chat.id+'&text='+y)
    .then(response => {
	  console.log('Message posted')
	  console.log(message.text)
      res.end('ok')
    })
    .catch(err => {
      console.log('Error :', err)
      res.end('Error :' + err)
    })

});

app.listen(3000, function() {
  console.log('Telegram app listening on port 3000!');
});
