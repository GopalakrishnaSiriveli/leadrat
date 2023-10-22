import React, {useState} from 'react'

function Selection(props) {
  const {onBookSeats} = props
  const [seatType, setSeatType] = useState('Standard')
  const [numSeats, setNumSeats] = useState(0)

  const handleBookSeats = () => {
    // You should implement the logic to send selected seats to the backend
    onBookSeats({
      seatType,
      numSeats,
      // Add the selected seats here
    })
  }

  return (
    <div className="selection">
      <select value={seatType} onChange={e => setSeatType(e.target.value)}>
        <option value="Standard">Standard</option>
        <option value="Premium">Premium</option>
      </select>
      <input
        type="number"
        value={numSeats}
        onChange={e => setNumSeats(e.target.value)}
      />
      <button onClick={handleBookSeats}>Proceed</button>
    </div>
  )
}

export default Selection
