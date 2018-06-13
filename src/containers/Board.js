import React from 'react'
import Square from '../components/Square'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: Array(9).fill(null),
      playerXturn: true,
      winningStates:[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]
    }
    this.handleTurn = this.handleTurn.bind(this)
    this.resetBoard = this.resetBoard.bind(this)
  }

  handleTurn(event){
    if(event.target.textContent){
      // console.log('Already in use!')
      return
    }
    //if playerXturn == true
    //then state.status[event.target.value] = X
    //change playerXturn = false
    //else state.status[event.target.value] = O
    //playerXturn = true
    if(this.state.playerXturn){
      const newArray = this.state.status
      newArray[event.target.value] = "X"
      this.setState({status:newArray})
      this.setState({playerXturn:false})
    }
    else{
      const newArray = this.state.status
      newArray[event.target.value] = "O"
      this.setState({status:newArray})
      this.setState({playerXturn:true})
    }
  }

  checkWinner(){
    console.log(this.state.status)
    console.log(this.state.winningStates)
  }

  renderSquare(index){
    return(
      <Square onTurnClick={this.handleTurn} value={index} status={this.state.status[index]} />
    )
  }

  resetBoard(){
    const clearBoard = Array(9).fill(null)
    this.setState({status:clearBoard})
  }

  checkPlayerTurn(){
    this.checkWinner()
    if(this.state.playerXturn) {
      return "Player X's turn"
    }
    else {
      return "Player O's turn"
    }
  }

  render(){
    return(
      <div>
        <button className="resetButton" onClick={this.resetBoard}>Play Again</button>
        <h3>{this.checkPlayerTurn()}</h3>

        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>

        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>

        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

export default Board
