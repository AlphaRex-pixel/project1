import { Box, Grid, Typography } from '@mui/material';
import React, { Component } from 'react'

export default class Teams extends Component {
  render() {

    var team = ["Digital Planning", "Digital Planning", "Digital Planning"]
    return (<Box>
      <Typography sx={{color: "black"}}>Teams</Typography>
      <Grid container sx={{display: "flex", alignItems: "center", justifyContent: "center",}}>
        {team.map((item, index) =><Grid item sx={{ display: "flex",bgcolor: this.props.dark === true ? "#D3D3D3" : "white", fontSize: 12, 
        width: "80%", justifyContent: "center", borderRadius: "16px", mt: 1,  boxShadow: 3}}>{item}</Grid>)}
      </Grid>
      </Box>
      )
  }
}
