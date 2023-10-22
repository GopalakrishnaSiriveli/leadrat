import React from 'react'

function Seat(props) {
  const {seat, onSeatClick} = props

  return (
    <div
      className={`seat ${seat.status === 'available' ? 'available' : 'booked'}`}
      onClick={() => onSeatClick(seat)}
      style={{
        border: '1px solid #ccc',
        margin: '5px',
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: seat.status === 'available' ? 'green' : 'red',
      }}
    >
      {seat.number}
    </div>
  )
}

export default Seat
