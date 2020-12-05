const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

let port = 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})