import React, {useEffect, useState} from "react";

function ThirdBlockComponent(props) {
    const [text, setText] = useState('');

    useEffect(() => {
        setText(props.textArray.map(tresc => tresc).join(''));
    }, [props.textArray]);

    return (
        <>
            <span>{text}</span>
        </>
    )
}

export default ThirdBlockComponent