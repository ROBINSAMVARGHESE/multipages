import React, { useEffect, useState } from 'react'
import './Countriesbox.css';
import axios from 'axios';
import CardsCountries from './CardsCountries';
import { useNavigate } from 'react-router-dom';
function Countriesbox() {
  const [cData, setcData] = useState([]);
  useEffect(() => {
    getData()
  }, []);
  const navigate = useNavigate();

  const getData = () => {
    axios.get('https://restcountries.com/v3.1/all')
      .then((res) => {
        console.log(res);
        setcData(res.data)
      })
      .catch((err) => {
        alert(err)
        navigate('/');
      })

  }
  return (

    <div className='countriesbox'>

      {cData.map((country, index) => <CardsCountries key={index} country={country} />)}
    </div>

  )
}

export default Countriesbox

