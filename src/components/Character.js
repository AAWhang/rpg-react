import * as React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import useKeyPress from './use-key-press'

function Character() {
  const goUp = useKeyPress('w');
  const goDown = useKeyPress('s');
  const goLeft = useKeyPress('a');
  const goRight = useKeyPress('d');
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);

  let mapdata = [
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0],
    [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
  ]
  let tileColor = 'green'
  let xPosition = '0'
  let yPosition = '0'
  const handleKeyboardInput = (e) => {
    if (goUp === true) { //up key
        movement(0, 1)
      // yPosition = yPos - 5
      // setyPos(yPosition)
    }
    if (goDown === true) { //Down key
        movement(0, -1)
      // yPosition = yPos + 5
      // setyPos(yPosition)
    }
    if (goLeft === true) { //Left key
        movement(-1, 0)
      // xPosition = xPos - 5
      // setxPos(xPosition)
    }
      if (goRight === true) { //Right key
        movement(1, 0)
      // xPosition = xPos + 5
      // setxPos(xPosition)
    }
  }

  function movement(x, y) {
    if (y == 1) {
      if (movementCheck(xPos, yPos - 1)) setyPos(yPos - 1)
    }
    if (y == -1) {
      if (movementCheck(xPos, yPos + 1)) setyPos(yPos + 1)
    }
    if (x == -1) {
      if (movementCheck(xPos - 1, yPos)) setxPos(xPos - 1)
    }
    if (x == 1) {
      if (movementCheck(xPos + 1, yPos)) setxPos(xPos + 1)
    }
  }

  function movementCheck(x, y) {
    if (mapdata[y][x] == 1 || mapdata[y][x] == undefined ) return false
      else return true
  }

  return (

    <div
      style={{
        backgroundColor: tileColor,
        height: '50px',
        width: '50px',
        marginLeft: -1100 + (100 * xPos) - (4 * xPos),
        marginTop: -800 + (100 * yPos),
        margin: '5px',
        flexDirection: 'row',
        position: 'absolute'
      }}
      id="inner" tabindex="0"
      onKeyPress={() => handleKeyboardInput('w')}
    />
  );
}

export default Character;
