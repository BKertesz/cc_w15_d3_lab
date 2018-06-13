import React from 'react'
import Board from './Board'


class GameTable extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render(){
    return(
      <div className='game'>
        <h1>Love and Death Tic Tac Toe</h1>
        <Board />
      </div>
    )
  }


}

export default GameTable
