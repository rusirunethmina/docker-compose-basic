const express = require('express');

const app = express();

app.get('/', (req, res) => {
    fetch('http://backend:5000/todos')
        .then(response => response.json())
        .then(data => {
            res.send(data);
        });
});

app.listen(3000, () => {
    console.log('Frontend is running on port 3000');
});

