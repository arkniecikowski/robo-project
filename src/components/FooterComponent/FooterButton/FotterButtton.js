import React, {useState} from 'react'



function FotterButton({handleClick}) {
    const [nick, setNick] = useState("");

    return (
        <>
        <div>
            <button onClick={() => handleClick({nick})}>Click</button>
            <input value={nick} onChange={e => setNick(e.target.value)}  />;
        </div>
        </>
    )
}

export default FotterButton