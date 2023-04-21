import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const [results, setResults] = useState({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });
  const getWeather = async (e) => {
      e.preventDefault();
      const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=2accd76d3a8c41398f654929232004&q=${city}&aqi=no`);
      setResults({
        country: res.data.location.country,
        cityName: res.data.location.name,
        temperature: res.data.current.temp_c,
        conditionText: res.data.current.condition.text,
        icon: res.data.current.condition.icon,
      });
  }
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather}/>
        <Results results={results}/>
      </div>
    </div>
  ); 
} 
export default App;
