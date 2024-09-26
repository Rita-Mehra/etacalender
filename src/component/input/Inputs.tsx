import React, { useState } from 'react';

const InputField = ({ title, type, placeholder }: any) => {

    const [isActive, setIsActive] = useState(false);

    const handleFocus = () => {
        setIsActive(true);
    };

    const handleBlur = () => {
        setIsActive(false);
    };

    return (
        <>
            <label className="font-13 mb-2 text-gray flex text-left" htmlFor="input-field">{title}</label>
            <input
                id="input-field"
                type={type}
                placeholder={placeholder}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{
                    borderColor: isActive ? '#2f4eff' : '#e2e2e2',
                    borderWidth: 1,
                    padding: "15px 24px",
                    borderRadius: "50px",
                    width: "100%",
                    height: "50px",
                    fontSize: 17,
                    marginBottom: 20
                }}
                className="text-black input-custom"
            />
        </>
    );
};

export default InputField;
