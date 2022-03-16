import React from 'react'

const Reservation = ({ product, onDelete }) => {
  return (
    <div>
    <div>Name: {product.name}</div>
    <div>Type: {product.type}</div>
    <div>Date: {product.date}</div>
    <div>Machine number: {product.machine}</div>

    <div>
      <button onClick={() => onDelete(product.id)}>
        Delete
      </button>
    </div>
  </div>
  )
}

export default Reservation