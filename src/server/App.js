const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

const db = new sqlite3.Database('./server/database.db')

app.get('/seats', (req, res) => {
  db.all('SELECT * FROM seats', (err, rows) => {
    if (err) {
      res.status(500).json({error: err.message})
      return
    }
    res.json(rows)
  })
})

app.post('/book', (req, res) => {
  const selectedSeats = req.body.selectedSeats
  // Implement the logic to mark selected seats as booked in the database here.
  // You need to expand this logic.
  res.json({message: 'Seats booked successfully'})
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
