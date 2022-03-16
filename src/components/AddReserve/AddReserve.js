import React, { useState } from 'react'
import logo from './icon.png'


function AddReserve({ onAdd }) {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [date, setDate] = useState('')
  const [machine, setMachine] = useState('')

  const submitForm = (event) => {
    event.preventDefault()
      onAdd({ name, type, date, machine })
      setName('');
  }


  const getNow = () => {
    var d = new Date();
    return (d.getFullYear()  + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2)) + "T" + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
}

  return (
    <div>
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={submitForm}>
            <input type="text" placeholder="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            <input type="datetime-local" min={getNow()}  onChange={(e) => setDate(e.target.value)} />
            <select onChange={(e) => setType(e.target.value)}>
              <option>Select type</option>
              <option>Kitchen wash: 60 degrees, 90 minutes</option>
              <option>Laundry: 40 degrees, 60 minutes</option>
              <option>Hand wash: 30 degrees, 20 minutes</option>
            </select>
            <select name="machine" onChange={(e) => setMachine(e.target.value)}>
                <option value="">Select Machine</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
            <button type="submit">
              Add
            </button>
          </form>
        </div>
  )
}

export default AddReserve