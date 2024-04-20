import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import{useState} from 'react';
import './Searchbox.css';

export default function SearchBox({updateinfo}){
    let [City,setCity]=useState("");
    let [Error,setError]=useState(false);
    const API_URL=" https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="0f996bcc38f1670d1ea244a253a36d7d";
    

    let getweatherinfo= async()=>{
        try{
            let response= await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
       let jsonresponse= await response.json();
       console.log(jsonresponse);
       let result= {
        city: City,
        temp: jsonresponse.main.temp,
        tempMin: jsonresponse.main.temp_min,
        humidity : jsonresponse.main.humidity,
        feelsLike: jsonresponse.main.feelslike,
        tempMax:jsonresponse.main.temp_max,
        weatherdesc:jsonresponse.weather[0].description,
       };
       console.log(result);
       return result;


        }
        catch(err){
           throw err;
        }
       
    };

    let handlechange=(evt)=>{
        setCity(evt.target.value);

    };

    let handlesubmit= async(evt)=>{
        try{
            evt.preventDefault();
        console.log(City);
        setCity("");
        let newinfo = await getweatherinfo();
        updateinfo(newinfo);

        }
        catch(err){
            setError(true);
        }
        
    };

    return(
        <div className="search">
          
             <form onSubmit={handlesubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={City} onChange={handlechange}/>
            <br></br> <br></br>
            <Button variant="contained" type="submit">Search</Button>
            {Error && <p style={{color:"red"}}>No such place exists in our APP</p>}
            </form> 
        </div>
    );
}