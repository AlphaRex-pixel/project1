import { Box, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import React, { Component } from 'react'

export default class Name extends Component {
  render() {
    return (
        <Box sx={{display: "flex", flexDirection: "row" }}>
        <Avatar sx={{ backgroundColor:  this.props.dark === true ? "transparent" : "black", 
        width: 70, height: 70, mt:4, ml: 3}}>N</Avatar>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", ml: 2, mt:3}}>
          <Typography sx={{ color: "black"}}>Good afternoon</Typography>
          <Typography sx={{fontWeight: 'bold', color: this.props.dark === true ? "white" : "black"}}>Name</Typography>
          <Typography sx={{ color: "black"}}>Software Engineer</Typography>
          <Typography sx={{fontSize: 12, mt:2, fontWeight:"bold", color: "#ef6c00"}}>CL:0.00   AL:23.13</Typography>
        </Box>
        </Box>
    )
  }
}
