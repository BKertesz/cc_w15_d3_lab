import React from 'react'
import Square from '../components/Square'
import Winner from '../components/Winner'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: Array(9).fill(null),
      playerXturn: true,
      winner:null,
      player1:"💀",
      player2:"💖"
    }
    this.handleTurn = this.handleTurn.bind(this)
    this.resetBoard = this.resetBoard.bind(this)
  }

  handleTurn(event){
    if(event.target.textContent){
      // console.log('Already in use!')
      return
    }
    if(this.state.playerXturn){
      const newArray = this.state.status.slice()
      newArray[event.target.value] = "💀"
      this.setState({status:newArray, playerXturn:false},() => this.checkWinner(this.state.status))


    }
    else{
      const newArray = this.state.status.slice()
      newArray[event.target.value] = "💖"
      this.setState({status:newArray, playerXturn:true},() => this.checkWinner(this.state.status))

    }
  }

  checkWinner(squares){
    const rows = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i= 0; i <rows.length; i++){
      const [a,b,c] = rows[i]
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        console.log("Player ",squares[a], "wins!") ;
        this.setState({ winner: squares[a]})
      }
    }
    return null;
  }

  renderSquare(index){
    return(
      <Square onTurnClick={this.handleTurn} value={index} status={this.state.status[index]} />
    )
  }

  resetBoard(){
    const clearBoard = Array(9).fill(null)
    this.setState({status:clearBoard,winner:null})
  }

  checkPlayerTurn(){
    // this.checkWinner(this.state.status)
    if(this.state.playerXturn) {
      return `Player ${this.state.player1}'s turn`
    }
    else {
      return `Player ${this.state.player2}'s turn`
    }
  }

  render(){
    return(
      <div className='board'>

        <button className="resetButton" onClick={this.resetBoard}>Play Again</button>
        <h3>{this.checkPlayerTurn()}</h3>
        { this.state.winner && <Winner winner={this.state.winner} /> }

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
