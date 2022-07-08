import React from "react"; 

function SecondBlockComponent(props) {

    return (
        <>
        <div>
            <button name="zastap" value='zastap' onClick={props.handleClickButton}>ZASTĄP</button>
            <button name="doklej" value='doklej' onClick={props.handleClickButton}>DOKLEJ</button>
        </div>
        </>
    )
}

export default SecondBlockComponent