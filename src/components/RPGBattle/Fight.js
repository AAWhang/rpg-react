import * as React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useRef, useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import useKeyPress from '../use-key-press'


function Fight(props) {


    return(
      <div>
        <p>{props.msg}</p>
        <Grid container spacing={0}>
          <Grid Item />
        </Grid>
      </div>
    )
}
export default Fight
