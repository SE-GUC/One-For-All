const express = require('express')

const schedules = require('./routes/api/schedules')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Book Store</h1>
    <a href="/api/schedules">schedules</a>
    `);
})

// Direct routes to appropriate files 
app.use('/api/schedules', schedules)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
