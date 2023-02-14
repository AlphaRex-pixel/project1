import { Avatar, Box, Typography } from '@mui/material'
import React, { Component } from 'react';
import MultiProgress from "react-multi-progress";


export default class Startsoon extends Component {
  render() {
    return (
        <Box sx={{display:"flex", flexDirection: "column", m:0}}>
            <Box sx={{ mx: 2, mt: 1}}>
        <Typography sx={{fontWeight: "bold", color: "primary.main"}}>Param Development - 3</Typography>
        <Typography sx={{fontSize: "12px", color: "black"}}>Strategic Resource Planning System - 0% - Billable</Typography>
        
        
        
        <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", mt: 2}}>
            <Typography sx={{fontSize:"10px",fontWeight: "bold", color: "green"}}>Start: 2023-01-02</Typography>
            <Typography sx={{fontSize:"10px",fontWeight: "bold", ml: 1}}>End: 2023-12-29</Typography>
            <Typography sx={{fontSize:"10px",fontWeight: "bold",color: '#ffeb3b', ml: 1}}>Start Soon</Typography>
        </Box>
        
        <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", mt: 1}}>
        <Avatar src="/broken-image.jpg" />
        <Avatar src="/broken-image.jpg" />
        <Avatar src="/broken-image.jpg" />
        <Avatar src="/broken-image.jpg" />
        </Box>  

        <Box sx={{mt: 1}}>
        <MultiProgress
			elements={[
				{
					value: 100,
					color: '#ef6c00',
				},
			]}
		/>
        </Box>
        
        <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", mt: 1}}>
            <Typography sx={{fontSize:"10px",fontWeight:"bold", color: "green"}}>Actual: 0</Typography>
            <Typography sx={{fontSize:"10px",fontWeight:"bold",color: "#0d47a1", ml: 1}}>InProgress: 0</Typography>
            <Typography sx={{fontSize:"10px",fontWeight:"bold",color: '#ef6c00', ml: 1}}>Assigned: 1500</Typography>
            <Typography sx={{fontSize:"10px",fontWeight:"bold",color: '#fdd835', ml: 1}}>Remain: 0</Typography>
        </Box>


        </Box>
        </Box>

    )
  }
}
