import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

import TimeSlider from './TimeSlider';

import './Player.css';


export default function Player(props) {

    const [ availableImages, setAvailableImages ] = useState([]);
    const [ imageUrls, setImageUrls ] = useState([]);
    const [ timeStep, setTimeStep ] = useState(0);
    const [ playing, setPlaying ] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await axios(
                'https://api.met.no/weatherapi/radar/2.0/available.json?type=5level_reflectivity&content=image&area=' + props.selectedArea,
            );
            setAvailableImages(response.data);
        }
        fetchData();
    }, [props.selectedArea]);

    useEffect( () => {
        if (availableImages.length > 0) {
            let newArray = [];
            for (let i = 0; i < availableImages.length; i++) {
                newArray.push(availableImages[i].uri);
            }
            setImageUrls(newArray);
        }
    }, [availableImages])

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

    let imagesrc = imageUrls[imageUrls.length - 1 + timeStep]
    
    return(
        <div className="player">
            <img src={imagesrc} alt="Radar-bilde" />
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