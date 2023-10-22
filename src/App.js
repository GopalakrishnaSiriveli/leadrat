import React, {useState} from 'react'
import SeatingLayout from './SeatingLayout'
import Selection from './Selection'

function App() {
  const [selectedSeats, setSelectedSeats] = useState([])

  const handleSeatSelect = seat => {
    // Implement seat selection logic and update the selectedSeats state
  }

  const handleBookSeats = data => {
    // Implement the logic to send the selected seats to the backend
    fetch('/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({selectedSeats: data}),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message)
        // Update seat status and reset the selected seats
        setSelectedSeats([])
      })
      .catch(error => console.error('Error booking seats:', error))
  }

  return (
    <div className="App">
      <h1>Book My Seat</h1>
      <Selection onBookSeats={handleBookSeats} />
      <SeatingLayout onSeatSelect={handleSeatSelect} />
    </div>
  )
}

export default App
