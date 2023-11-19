import React from 'react';
import Weather from "./Weather";
import './App.css';
export default function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Weather defaultCity="london"/>
      <footer className='text-center'>
      This project coded by <a href="https://idyllic-quokka-efbe77.netlify.app"title='Maryam Reyhanian'> Maryam Reyhanian</a> and {""}
      <a 
      href= "https://github.com/maryamrz402/weather-react-app"
    >
         open-sourced on GitHub
        </a> 
      </footer>
    </div></div>
  );
}


