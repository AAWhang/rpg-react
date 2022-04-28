import * as React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useRef, useState } from 'react'
import useKeyPress from './use-key-press'
import Maps from './Maps'
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Battle from './RPGBattle/Fight'
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function GEngine() {
  const goUp = useKeyPress('w');
  const goDown = useKeyPress('s');
  const goLeft = useKeyPress('a');
  const goRight = useKeyPress('d');
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [modalMsg, setMsg] = useState('Hi')

  let mapdata = [
    [9, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
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

  const [mapHook, setMap] = useState(mapdata);


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
      if (open === true)
        {
          if (goUp === true) { //up key
              setMsg("Up")
          }
          if (goDown === true) { //Down key
              setMsg("Down")
          }
          if (goLeft === true) { //Left key
              setMsg("Left")
          }
            if (goRight === true) { //Right key
              setMsg("Right")
          }
        }
  }

  function movement(x, y) {
    if (y === 1) {
      if (movementCheck(xPos, yPos - 1)) {
        mapdata = mapHook
        mapdata[yPos][xPos] = 0
        mapdata[yPos - 1][xPos] = 9
        setyPos(yPos - 1)
        setMap(mapdata)
      }
    }
    if (y === -1) {
      if (movementCheck(xPos, yPos + 1)) {
        mapdata = mapHook
        mapdata[yPos][xPos] = 0
        mapdata[yPos + 1][xPos] = 9
        setyPos(yPos + 1)
        setMap(mapdata)
      }
    }
    if (x === -1) {
      if (movementCheck(xPos - 1, yPos)) {
        mapdata = mapHook
        mapdata[yPos][xPos] = 0
        mapdata[yPos][xPos - 1] = 9
        setxPos(xPos - 1)
        setMap(mapdata)
      }
    }
    if (x === 1) {
      if (movementCheck(xPos + 1, yPos)) {
        mapdata = mapHook
        mapdata[yPos][xPos] = 0
        mapdata[yPos][xPos + 1] = 9
        setxPos(xPos + 1)
        setMap(mapdata)
      }
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
    <div onKeyPress={() => handleKeyboardInput()}       id="inner" tabindex="0">
      <Maps mapdata={mapHook} />

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
            <Battle endBattle={setOpen} msg={modalMsg} />
          </Box>
        </Fade>
      </Modal>
    </div>
  )

}

export default GEngine;
