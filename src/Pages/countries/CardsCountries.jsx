
import React from 'react';
import { Card } from 'react-bootstrap';
import './CardsCountries.css';

function CardsCountries({ country }) {

  

  const languages = country.languages ?
    Object.values(country.languages).join(', ') :
    'No languages data available';

  const currencies = country.currencies ?
    Object.values(country.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ') :
    'No currencies data available';

  

  return (
    <Card className='card' style={{ margin: '1rem', }}>

      <Card.Img
        variant="top"
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        className='card-img'
      />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>{country.name.common}</Card.Title>
        <Card.Text className='card-text'>
          <strong>Flag:</strong> {country.flag}
        </Card.Text>
        <Card.Text className='card-text'>
          <strong>Region:</strong> {country.region}
        </Card.Text>
        <Card.Text className='card-text'>
          <strong>Population:</strong> {country.population}
        </Card.Text>
        <Card.Text className='card-text'>
          {country.official}
        </Card.Text>
        <Card.Text className='card-text'>
          <strong>Countries Area:</strong> {country.area}
        </Card.Text>
        <Card.Text className='card-text'>
          <strong>Languages:</strong> {languages}
        </Card.Text>
        <Card.Text className='card-text'>
          <strong>Currencies:</strong> {currencies}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardsCountries;


