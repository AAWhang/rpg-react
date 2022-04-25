import * as React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useRef, useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import useKeyPress from './use-key-press'
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Battle from './RPGBattle/Fight'
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import 'reactjs-popup/dist/index.css';

function Character() {
  const goUp = useKeyPress('w');
  const goDown = useKeyPress('s');
  const goLeft = useKeyPress('a');
  const goRight = useKeyPress('d');
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  let mapdata = [
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0],
    [2, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
  ]
  let tileColor = 'green'
  let xPosition = '0'
  let yPosition = '0'
  const handleKeyboardInput = (e) => {
    if (open === false)
      {
        if (goUp === true) { //up key
            movement(0, 1)
        }
        if (goDown === true) { //Down key
            movement(0, -1)
        }
        if (goLeft === true) { //Left key
            movement(-1, 0)
        }
          if (goRight === true) { //Right key
            movement(1, 0)
        }
      }
  }

  function movement(x, y) {
    if (y === 1) {
      if (movementCheck(xPos, yPos - 1)) setyPos(yPos - 1)
    }
    if (y === -1) {
      if (movementCheck(xPos, yPos + 1)) setyPos(yPos + 1)
    }
    if (x === -1) {
      if (movementCheck(xPos - 1, yPos)) setxPos(xPos - 1)
    }
    if (x === 1) {
      if (movementCheck(xPos + 1, yPos)) setxPos(xPos + 1)
    }
  }

  function movementCheck(x, y) {
    if (mapdata[y][x] === 2) setOpen(true)
    if (mapdata[y][x] === 1 || mapdata[y][x] === undefined ) return false
      else return true
  }

  const styleFight = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  return (

    <div
      style={{
        backgroundColor: tileColor,
        height: '50px',
        width: '50px',
        marginLeft: -1100 + (96 * xPos),
        marginTop: -795 + (100 * yPos),
        margin: '5px',
        flexDirection: 'row',
        position: 'absolute'
      }}
      ref={inputRef}
      id="inner" tabindex="0"
      onKeyPress={() => handleKeyboardInput()}
    >
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={closeModal}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <Box sx={styleFight}>
            <Battle endBattle={setOpen} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Character;
