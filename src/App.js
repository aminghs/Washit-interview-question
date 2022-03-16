import './App.css';
import AddReserve from './components/AddReserve/AddReserve';
import ReservationList from './components/ReservationList/ReservationList';
import { useEffect, useState} from 'react';

function App() {
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch('http://localhost:8000/reservations')

      const responoseData = await response.json()

      setReservations(responoseData)
    }

    sendRequest()
  }, [])

  const addReservation = async (name) => {
    const response = await fetch('http://localhost:8000/reservations', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(name),
    })

    const responseData = await response.json()
    setReservations([...reservations, responseData])
  }

  const deleteReservation = async (id) => {
    await fetch(`http://localhost:8000/reservations/${id}`, {
      method: 'DELETE',
    })

    setReservations(reservations.filter((item) => item.id !== id))
  }

  return (
    <div className="container">WashIt
      <AddReserve onAdd={addReservation} />
      <ReservationList reservations={reservations} onDelete={deleteReservation} />
    </div>
  )
}

export default App;
