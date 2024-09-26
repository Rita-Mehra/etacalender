import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const ColorCircleProgress = ({ value, text, textSize, className }: any) => {

    return (
        <div className={`color-circle pa-2 ${className}`} >
            <CircularProgressbarWithChildren strokeWidth={10} value={value}>
                <div style={{ fontSize: textSize, marginTop: -5, textAlign: 'center' }}>
                    <strong className="my-2" style={{ fontSize: '1.2500em', color: '#3c3b3a' }}>{value}</strong>
                    <div style={{ color: '#777777', fontSize: '0.8750em' }}>{text}</div>
                </div>
            </CircularProgressbarWithChildren>
            { }
        </div>
    )
}

export default ColorCircleProgress;