import React, {useState, useEffect} from 'react'
import Seat from './Seat'

function SeatingLayout(props) {
  const {onSeatSelect} = props
  const [seats, setSeats] = useState([])

  useEffect(() => {
    // Fetch seat data from the backend
    fetch('/seats')
      .then(response => response.json())
      .then(data => setSeats(data))
      .catch(error => console.error('Error fetching seats:', error))
  }, [])

  const handleSeatClick = seat => {
    // Handle seat selection logic and pass the selected seat to the parent component
    onSeatSelect(seat)
  }

  return (
    <div className="seating-layout">
      {seats.map(seat => (
        <Seat key={seat.id} seat={seat} onSeatClick={handleSeatClick} />
      ))}
    </div>
  )
}

export default SeatingLayout
