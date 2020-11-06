import React from 'react';
import Slider from '@material-ui/core/Slider';

export default function TimeSlider(props) {

    const handleChange = (e, value) => {
        props.callbackFunction(value);
    }

    const marks = [
        {
          value: -90,
          label: '-90 min.',
        },
        {
          value: 0,
          label: 'Nå',
        },
        {
          value: 90,
          label: '+90 min.',
        },
      ];
    
    return (
        <div className="slider" style={{width: "300px", color: "red"}}>
            <Slider
                defaultValue={0}
                onChange={handleChange}
                aria-labelledby="discrete-slider-small-steps"
                step={10}
                min={-90}
                max={90}
                marks={marks}
          />
            
        </div>
    )
}