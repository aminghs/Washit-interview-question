import './App.css';
import AddReserve from './components/AddReserve/AddReserve';
import ReservationList from './components/ReservationList/ReservationList';
import { useEffect, useState} from 'react';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch('http://localhost:8000/products')

      const responoseData = await response.json()

      setProducts(responoseData)
    }

    sendRequest()
  }, [])

  const addProduct = async (name) => {
    const response = await fetch('http://localhost:8000/products', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(name),
    })

    const responseData = await response.json()

    setProducts([...products, responseData])
  }

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:8000/products/${id}`, {
      method: 'DELETE',
    })

    setProducts(products.filter((item) => item.id !== id))
  }

  return (
    <div className="container">WashIt
      <AddReserve onAdd={addProduct} />
      <ReservationList products={products} onDelete={deleteProduct} />
    </div>
  )
}

export default App;
