import React from 'react';

const Square = (props) => {

  return (<button className="boardSquare" onClick={props.onTurnClick} value={props.value}>{props.status}
  </button>
  )
}
export default Square;
