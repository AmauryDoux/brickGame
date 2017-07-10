const
    express = require('express'),
    app = express(),
    port = process.env.PORT || 3000

app.use(express.static("public"));

let server = app.listen(3000, function() {
    console.log('Connected: 3000')
})
