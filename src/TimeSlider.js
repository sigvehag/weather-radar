import React from 'react';
import Slider from '@material-ui/core/Slider';

export default function TimeSlider(props) {

    const handleChange = (e, value) => {
        props.callbackFunction(value);
    }

    const marks = [
        {
          value: -18,
          label: '-90 min.',
        },
        {
          value: -12,
          label: '-60 min.',
        },
        {
          value: -6,
          label: '-30 min.',
        },
        {
          value: 0,
          label: 'Nå',
        },
      ];
    
    return (
        <div className="slider">
            <Slider
                value={props.value}
                onChange={handleChange}
                aria-labelledby="discrete-slider-small-steps"
                step={1}
                min={-18}
                max={0}
                marks={marks}
          />
            
        </div>
    )
}