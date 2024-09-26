import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const CircleProgress = ({ value, imageSrc, imageSize, text, textSize }: any) => {

    return (
        <CircularProgressbarWithChildren strokeWidth={12} value={value}>
            <img style={{ width: imageSize, marginTop: -5 }} src={imageSrc} alt="image" />
            <div style={{ fontSize: textSize, marginTop: -5, textAlign: 'center' }}>
                <strong className="my-2" style={{ fontSize: 26, color: '#3c3b3a' }}>{value}%</strong>
                <div className="text-sm" style={{ color: '#777777' }}>{text}</div>
            </div>
        </CircularProgressbarWithChildren>
    )
}

export default CircleProgress;