import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

function Maps(props) {

  let tileColor = 'green'
  return (
    <div className="App">
      <header className="App-header">
        {props.mapdata.map((x) => (
          <Grid container spacing={0}>
            {x.map((y) => {
              switch(y){
                case 0: tileColor = '#aaaaaa'
                break;
                case 1: tileColor = '#5050FF'
                break;
                case 2: tileColor = '#aaaaaa'
                break;
                case 9: tileColor = 'green'
                break;
              }
              return(
              <Grid Item xs={.5}>
                <div
                  style={{
                    backgroundColor: tileColor,
                    height: '50px',
                    width: '50px',
                    flexDirection: 'row'
                  }}
                  />
              </Grid>
            )})}
          </Grid>
        ))}
      </header>
    </div>
  );
}

export default Maps;
