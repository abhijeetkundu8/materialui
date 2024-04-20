import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './WeatherInfo.css';
export default function Weatherinfo({info}){
        const Init_url="https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

        const HOT_URL="https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        const COLD_URL="https://images.unsplash.com/photo-1477468572316-36979010099d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        const RAIN_URL="https://images.unsplash.com/photo-1428592953211-077101b2021b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        return(
            <div className="card1">
       
            <div className='cardcontainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={info.humidity>80 ? RAIN_URL : info.temp>15 ?HOT_URL :COLD_URL}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city} {info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ?<WbSunnyIcon/> :<AcUnitIcon/>}
              </Typography>
              <Typography variant="body2" color="text.secondary" component={"span"}>
                <p>Temperature={info.temp}&deg;C</p>
                <p>Humidity={info.humidity}</p>
                <p>Temperature Min={info.tempMin}&deg;C</p>
                <p>Temperature Max={info.tempMax}</p>
                <p>Weather Desc:{info.weatherdesc}</p>
              </Typography>
            </CardContent>
            
          </Card>
          </div>
          </div>
        );
}