import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default () => {
  // useEffect(() => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(result => {
        setCountries(result.data);
        setLoading(true);
      })
      .catch(error => {
        setError(error.message);
        setLoading(true);
      });
  }, []);
  if (loading) {
    return (
      <ul>
        {error ? (
          <li>{error.message}</li>
        ) : (
          countries.map((country, index) => <li key={index}>{country.name}</li>)
        )}
      </ul>
    );
  } else {
    return <div>Loading....</div>;
  }
};
