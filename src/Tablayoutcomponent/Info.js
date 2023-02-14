import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import TaskView from './TaskView';
import { Box, Divider } from '@mui/material';
import MainInfo from './MainInfo';


export default class Info extends Component {
  render() {
    return (
      <Box>
      <Grid container sx={{height: '10vw',
      backgroundColor: 'transparent' ,
      borderRadius: '16px', 
      border: 5,
      borderColor:"#ffad33",

      }}>
        <Box style={{ height: '100%', width: '100%'}}>
          <MainInfo />
        </Box>
        <Box marginTop={'10px'} p={2} sx={{ width: '100%' }}>
          <Divider />
        </Box>
        <Box style={{height:'100%',width:'100%'}}>
          <TaskView />
        </Box>

      </Grid>
      </Box>

    )
  }
}
