import * as React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useRef, useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import useKeyPress from '../use-key-press'


function Fight(props) {
    const goUp = useKeyPress('w');
    const [highlight, setxHighlight] = useState(false);
    const inputRef = useRef()

    useEffect(() => {
      inputRef.current.focus()
      const handleKeyboardInput = (e) => {
            setxHighlight(!highlight)
      }
      window.addEventListener('keydown', handleKeyboardInput)
      return () => window.removeEventListener('keydown', handleKeyboardInput)
    }, [])


    return(
      <div ref={inputRef}>
        <p style={highlight ? { fontWeight: 'normal' } : { fontWeight: 'bold' }}>hiiiiiiiiiiiiiii</p>
        <Grid container spacing={0}>
          <Grid Item />
        </Grid>
      </div>
    )
}
export default Fight
