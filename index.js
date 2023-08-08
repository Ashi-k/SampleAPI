const express = require('express');
const app = express();
const port = 3000;

// Middleware 
app.use(express.json());


app.get('/apiget', (req, res) => {
    res.send('This is Get API response');
});


app.post('/apipost', (req, res) => {
    const requestData = req.body;
    res.json({ message: 'This is POST API response', data: requestData });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

