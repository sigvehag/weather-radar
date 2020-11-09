import React, { useEffect, useState } from 'react';

import './AreaTable.css';

export default function Player(props) {

    const areas = [ 
        {
            name: "Øst-Norge",
            value: "eastern_norway"
        },
        {
            name: "Midt-Norge",
            value: "central_norway"
        },
        {
            name: "Nordland",
            value: "nordland"
        },
        {
            name: "Troms",
            value: "troms"
        },
        {
           name: "Finnmark",
           value: "finnmark"
        }
    ];

    const handleClick = (area) => {
        props.callbackFunction(area);
    }
        

    return(
        <div>
            <table id="areas">
                <tbody>
                    {areas.map((area) => {
                        return (
                            <tr key={area.value} onClick={() => handleClick(area.value)}>
                                <td>
                                    <button type="button" className="area-button">
                                        {area.name}
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>    
        </div> 
    );
}