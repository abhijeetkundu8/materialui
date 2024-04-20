import SearchBox from "./SearchBox";
import Weatherinfo from "./Weatherinfo";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherinfo,setweatherinfo]=useState(
        {
            city:"Delhi",
            temp:31.2,
            humidity:47,
            tempMin:30.5,
            tempMax:32,
            weatherdesc:"Sunny",

        }
    );

    let updateinfo=(newinfo)=>{
        setweatherinfo(newinfo);

    };
    return (
        <div>
        <h1>WEATHER APP BY ABHIJEET</h1>
        <SearchBox updateinfo={updateinfo}/>
        <Weatherinfo info={weatherinfo}/>
        </div>
        
    );
}