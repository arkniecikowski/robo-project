import React, {useState, useEffect} from "react";
import walmartData from "./../../walmartData.json" 

import FirstBlockComponent from "./FirstBlockComponent";
import SecondBlockComponent from "./SecondBlockComponent";
import ThirdBlockComponent from "./ThirdBlockComponent";


function MainComponent() {
    const [selectedRadioOption, setSelectedRadioOption] = useState(null);
    const [textArray, setTextArray] = useState([]);

    const jsonData = walmartData.walmart;


    const handleRadioChange = (e) => {
        const radioValue = e.target.value;

        setSelectedRadioOption(radioValue);
    }

    const handleButtonClick = (e) => {
        const buttonValue = e.target.value;

        if (selectedRadioOption !== null) {
            modifyTextArray(buttonValue);
        }
    }

    const modifyTextArray = (textAction) => {
        const text = jsonData.find(data => data.id == selectedRadioOption);

        if (textAction === 'doklej') {
            setTextArray([...textArray, text.tresc]);
        } else {
            setTextArray([text.tresc])
        }
    }

    return (
        <>
        <div>
            <h1>Nagłówek h1</h1>
        </div>
        <div>
            <div>
                <FirstBlockComponent handleClickRadioButton={handleRadioChange}/>
            </div>
            <div>
                <SecondBlockComponent handleClickButton={handleButtonClick}/>
            </div>
            <div>
                <ThirdBlockComponent textArray={textArray}/>
            </div>
        </div>
        </>
    )
}

export default MainComponent