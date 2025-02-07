import React, { useEffect, useState } from 'react';
import './App.css'; 
import axios from 'axios';

function App() {
 const [carId, setCarId] = useState(1)
 const [car, setCar] = useState({})
const getCar = async () =>  {
  const res = await axios.get(`https://myfakeapi.com/api/cars/${carId}`)
  setCar(res.data)
}
 useEffect(() => {

 }, [])
  return (
    <div> 
      <input 
      onChange={(e) => setCarId(e.target.value)}
      type ="number" 
      placeholder="Car Id"></input>
      <button onClick={getCar}>Get Cars</button>
    <div>
      <h2>Name : {car.Car?.car}</h2>
      <h2>Model : {car.Car?.car_model}</h2>
      <h2>Color : {car.Car?.car_color}</h2>
    </div>
    </div>
  );
}

export default App;
