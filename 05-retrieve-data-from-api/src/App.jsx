// https://medium.com/@shriharim006/using-fetch-to-fetch-data-in-react-step-by-step-tutorial-c807e3e1152d
import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  // useState is a React Hook that lets you add a state variable to your component.
  // https://react.dev/reference/react/useState
  const [europeanCountries, setEuropeanCountries] = useState([]);
  const [africanCountries, setAfricanCountries] = useState([]);

  // useEffect is a React Hook that lets you synchronize a component with an external system.
  // https://react.dev/reference/react/useEffect
  useEffect(() => {
    /* native javascript `fetch` function */
    /* https://devhints.io/js-fetch */
    fetch('https://restcountries.com/v3.1/region/europe', {
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setEuropeanCountries(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    /* axios javascript library */
    /* https://axios-http.com/docs/example */ 
    axios.get('https://restcountries.com/v3.1/region/africa', {
        headers: {
          // Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status != 200) {
          throw new Error('Network response was not ok');
        }
        setAfricanCountries(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Vite + React</h1>

      <h3>Retrieve European Countries from https://restcountries.com using "fetch" function</h3>
      <table className="card">
        <thead>
          <tr>
            <th>Flag</th>
            <th>Common Name</th>
            <th>Official Name</th>
            <th>TLD</th>
            <th>Population</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>

          {/* the loop */}
          {europeanCountries.map((country) => (
            <tr key={country.ccn3}>
              <td>{country.flag}</td>
              <td>{country.name.common}</td>
              <td>{country.name.official}</td>
              <td>{country.tld}</td>
              <td>{country.population}</td>
              <td>{country.region}</td>
            </tr>
          ))}

        </tbody>
      </table>

      <br/>

      <h3>Retrieve African Countries from https://restcountries.com using "axios" library</h3>
      <table className="card">
        <thead>
          <tr>
            <th>Flag</th>
            <th>Common Name</th>
            <th>Official Name</th>
            <th>TLD</th>
            <th>Population</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>

          {/* the loop */}
          {africanCountries.map((country) => (
            <tr key={country.ccn3}>
              <td>{country.flag}</td>
              <td>{country.name.common}</td>
              <td>{country.name.official}</td>
              <td>{country.tld}</td>
              <td>{country.population}</td>
              <td>{country.region}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </>
  )
}

export default App
