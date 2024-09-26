import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ onClick, btnDesign, btnName, icon }: any) => {
    const className = btnDesign ? 'blue-button' : 'white-button';

    return (
        <div>
            <Button
                className={className}
                variant="contained"
                color="primary"
                onClick={onClick}
                startIcon={icon}
            >
                {btnName}
            </Button>
        </div>
    )
};

export default CustomButton;