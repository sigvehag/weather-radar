import React, {useState} from 'react';
import TimeSlider from './TimeSlider';

export default function Player() {

    const [time, setTime] = useState(0);

const handleSliderChange = (value) => {
    setTime(value);
}

const getDateTime = (minuteDiff) => {
    let date = new Date(Date.now());

    date.setMinutes((Math.round((date.getMinutes() + minuteDiff) / 10) * 10) % 60);
    date.setHours(date.getHours() + Math.round((date.getMinutes() + minuteDiff) / 60));
    
    return date.getFullYear() + '-' +
        date.getUTCMonth() + '-' +
        date.getUTCDate() + 'T' +
        date.getUTCHours() + ':' +
        (date.getUTCMinutes()<10?'0':'') + date.getUTCMinutes() +
        ':00z';
}

let datetime = getDateTime(20);

return(
    <div className="player">
        <h1>{time}</h1>
        <h1>{datetime}</h1>
        <TimeSlider callbackFunction = {handleSliderChange}/>
    </div>
)

}
