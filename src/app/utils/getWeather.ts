import axios from 'axios'

const API_KEY = '587648e270a85d6a001ae35f6ae0434a'

export function getWeather(city: string){
    return axios
        .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

        )
        .then((response) => response.data)
        .catch((error) =>{
            console.error('Error fetching weather data:', error)
            throw error;
 
        })
}