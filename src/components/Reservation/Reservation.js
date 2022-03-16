import React from 'react'

const Reservation = ({ reservation, onDelete }) => {
  return (
    <div>
    <div>Name: {reservation.name}</div>
    <div>Type: {reservation.type}</div>
    <div>Date: {reservation.date}</div>
    <div>Machine number: {reservation.machine}</div>

    <div>
      <button onClick={() => onDelete(reservation.id)}>
        Delete
      </button>
    </div>
  </div>
  )
}

export default Reservation