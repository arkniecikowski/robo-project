import React from "react";

function FirstBlockComponent(props) {

  return (
      <>
      <div>
       <input type="radio" value={1} name='foo' onChange={props.handleClickRadioButton}/> Pierwsza treść
       <input type="radio" value={2} name='foo' onChange={props.handleClickRadioButton}/> Druga treść
       <input type="radio" value={3} name='foo' onChange={props.handleClickRadioButton}/> Losowa treść
      </div>
      </>
  )
}

export default FirstBlockComponent