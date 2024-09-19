import React, { useEffect, useState } from 'react'
import './Weather.css'
import search_icon from "../assets/search.svg";



const Weather = () => {
  const [iconAddress, setIconAddress] = useState('');
  const [temp,setTemp] = useState(0);
  const [desc,setDesc] = useState('desc')
  const search=async(city)=>{
    try {
      const API=import.meta.env.VITE_API_KEY;
      
      console.log("HELLO")
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`;
      const response=await fetch(url);
      const data=await response.json();
      const k=data.main;
      const feels_like=k.temp;
      // icon2=data.weather[0].icon;console.log(data.weather[0].icon);
      
      // console.log(data.weather[0].icon);
      let icon2=data.weather[0].main;
      console.log(icon2)
      
      let des=data.weather[0].description
      setDesc(des);
      setIconAddress(`./src/assets/${icon2}.png`);
      setTemp(Math.round(feels_like-273));
      // console.log(Math.round(feels_like/10));
      // console.log(data.main)
      // console.log(data);
      // console.log(iconAddress)
      console.log(desc)
      // iconAddress=;
    } catch (error) {
      console.log("error!");
      
    }
  }

  let [cityName,setcityName]=useState('');
  
  const searchCity=()=>{
    
    console.log(cityName);
    search(cityName)
    
  }
  
  const CustomChange=(e)=>{
    setcityName(e.target.value);
  }
  
  return (
    <div className='Weather'>
      <div className="search-bar">
        <input type="text" placeholder='Search City' onChange={CustomChange} />
        <img src={search_icon} alt=""  onClick={searchCity}/>
      </div>
      <div className="image-section">
        <div className="weather-image">
          <img src={iconAddress} alt="icon" />
        </div>
      </div>
      
      <h1>{temp}</h1>
      <h1>{desc}</h1>
    </div>
  )
}

export default Weather
