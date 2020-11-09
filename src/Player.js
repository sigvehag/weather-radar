import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

import TimeSlider from './TimeSlider';

import './Player.css';


export default function Player(props) {

    const [ imageData, setImageData ] = useState([]);
    const [ timeStep, setTimeStep ] = useState(0);
    const [ playing, setPlaying ] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await axios(
                'https://api.met.no/weatherapi/radar/2.0/available.json?type=5level_reflectivity&content=image&area=' + props.selectedArea,
            );
            let data = response.data;

            if (data.length > 0) {
                let newArray = [];
                for (let i = 0; i < data.length; i++) {
                    newArray.push({
                        time: data[i].params.time,
                        uri: data[i].uri
                    });
                }
                setImageData(newArray);
                setTimeStep(0);
            }
        }
        fetchData();
    }, [props.selectedArea]);

    useEffect(() => {
        const loop = setInterval(() => {
            if( playing ) {
                if (timeStep === 0) {
                    setTimeStep(-18);
                } else {
                    setTimeStep(timeStep+1);
                }
            }
        }, 750);
        return () => clearInterval(loop);
    });

    
    const handleSliderChange = (value) => {
        setTimeStep(value);
    }

    let imagesrc = "";
    let timestamp = "";

    if (imageData.length > 0) {
        let currentImage = imageData[imageData.length - 1 + timeStep];
        imagesrc = currentImage.uri;
        let date = currentImage.time.match(/\d+/g);
        timestamp = date[2] + "." + date[1] + "." + date[0] + " " + (parseInt(date[3]) + 1) + ":" + date[4] + ":" + date[5];
    }

    

    return(
        <div className="player">
            <div className="radar-image">
                <img src={imagesrc} alt="Radar-bilde" />
            </div>
            <div className="timeStamp">
                <p>{timestamp}</p>
            </div>
            <div className="player-controls">
                
                <div className="play-pause" onClick={() => setPlaying(!playing)} >
                    { playing ?
                        <PauseIcon fontSize="large" /> :
                        <PlayArrowIcon fontSize="large" />
                    }
                </div>
                <TimeSlider className="player-slider" value={timeStep} callbackFunction = {handleSliderChange}/>
            </div>
        </div>
    )

}