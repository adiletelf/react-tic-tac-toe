import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import { Board } from './Board'

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<Game />);

