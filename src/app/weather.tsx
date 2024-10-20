"use client"
import React, { useState } from 'react'
import { getWeather } from './utils/getWeather';
import { WeatherData } from './types/weather';
export default function Weather(){
    const [city, setCity] = useState<string>('');
    const [weather, setWeather] = useState<WeatherData | null>(null)
    const [error, setError] = useState<string | null>(null)

    function handleGetWeather(){
        if (city) {
            getWeather(city)
             .then((data) => {
                setWeather(data);
                setError(null);
              })
              .catch(() => {
                setError('City not found');
                setWeather(null);
              })
        } else {
            setError('Please enter a city')
            }
        }
    
    
    return(
        
        <div className=" flex flex-col items-center justify-center min-h-screen">
            <h1> Weather Forecast</h1>
            <p>Enter a city to get the weather</p>

            <input 
                type="text" 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name" 
                className=" border-black border-2 
                            mt-4 p-2 rounded 
                             text-black"
            />

            <button className='mt-4 p-2 bg-black 
                            text-white rounded-lg 
                            hover:bg-gray-300 transition-all 
                            duration-300 ease-in
                            hover:text-black
                            
                            '
                            
                    onClick={handleGetWeather}>
                Get Weather
            </button>

            {error && <p className='text-red-500 mt-4'>{error}</p>}
            {weather && (
                <div className="mt-4 p-4 bg-white text-black rounded">
                    <h2 className="text-xl font-bold">{weather.name}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                    <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
            
        </div>
    )
}