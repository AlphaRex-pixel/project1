import { Box, Typography } from '@mui/material'
import React, { Component } from 'react'

export default class Description extends Component {
  render() {
    return (
        <Box sx={{ mt:4, ml: 2, color: "black"}}>
        <Typography variant="h5"sx={{ display: 'inline-flex',color: "#ef6c00", fontWeight: "bold", borderBottom: 1, borderBottomColor: "black"}}>You got 3 tasks today</Typography>
        <Typography sx={{ display: 'inline-flex', borderBottom: 1, borderBottomColor: "black"}}>Balance Workload <Typography sx={{fontWeight: "bold",color: '#1976d2', ml: 1}}>2106 Hours</Typography></Typography>
        <Typography sx={{fontSize:16,  display: "flex", flexDirection: "row"}}>Your works are<Typography sx={{ fontWeight: "bold",color: "green", ml: 0.5}}>75%</Typography> <Typography sx={{ml:0.5}}>billable this week</Typography></Typography>
        </Box>
    )
  }
}
