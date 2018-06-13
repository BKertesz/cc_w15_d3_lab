import React from 'react'
import Board from './Board'


class GameTable extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div>
        <h1>Tic Tac Toe</h1>
        <Board />
      </div>
    )
  }


}

export default GameTable
