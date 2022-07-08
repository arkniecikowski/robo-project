import React from 'react'

import "./HeaderComponent.scss"


export default function HeaderComponent({handleNick}) {

    return (
        <>
            <div className="header-container">
                <div className="header-logo">LOGO</div>
                <div className="header-nick">
                    <p>{handleNick}</p>
                </div>
                <div className="header-text">Zadanie rekrutacyjne</div>
            </div>
        </>
    )
}