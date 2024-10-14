const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello Docker World");
});


app.get('/todos', (req, res) => {
    const todo = [{ id: '1', name: 'todo 1' }, { id: '2', name: 'todo 2' }, { id: '3', name: 'todo 3' }];

    res.send(todo);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

