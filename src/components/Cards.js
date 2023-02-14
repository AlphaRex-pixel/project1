import React from 'react';
import {Card, Grid, Typography } from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ArticleIcon from '@mui/icons-material/Article';
import PostAddIcon from '@mui/icons-material/PostAdd';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import AddchartIcon from '@mui/icons-material/Addchart';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

export default class Cards extends React.Component{
 
  
  clicked(){
    console.log("Child 2 "+this.props.value)
  }
  
  
  render() {
    return ( <>{this.props.value === 1 ? 
      <>
   <Grid container spacing display='flex' direction={'row'}  justifyContent="space-between" >
     <Card sx={{
      width: "19%", height: '4vw', py:1, pl:3, borderRadius: "45px",
       display: "flex", justifyContent: "flex-start", alignItems: "center", color: "white",backgroundColor: "primary.main"
    }}><EventNoteIcon/>
       <Typography sx={{ml:1}}>My Calendar</Typography></Card>
     <Card sx={{
      width: "19%", height: '4vw', py:2, pl:3, borderRadius: "45px",
      display: "flex", justifyContent: "flex-start", alignItems: "center", color: "white", backgroundColor: "primary.main"
    }}><WatchLaterIcon/>
      <Typography sx={{ml: 1}}>Workload</Typography></Card>
    <Card sx={{
      width: "19%", height: '4vw',py:2, pl:3, borderRadius: "45px",
      display: "flex", justifyContent: "flex-start", alignItems: "center", color: "white", backgroundColor: "primary.main"
    }}><ArticleIcon/>
      <Typography sx={{ml:1}}>Timesheets</Typography></Card>
    <Card sx={{
      width: "19%", height: '4vw',py:2, pl:3, borderRadius: "45px",
      display: "flex", justifyContent: "flex-start", alignItems: "center", color: "white", backgroundColor: "primary.main"
    }}><PostAddIcon/>
      <Typography sx={{ml:1}}>Hour Requests</Typography></Card>
      <Card sx={{
      width: "19%", height: '4vw',py:2, pl:3, borderRadius: "45px",
      display: "flex", justifyContent: "flex-start", alignItems: "center", color: "white", backgroundColor: "primary.main"
    }}><WorkOffIcon/>
      <Typography sx={{ml:1}}>Out of Work</Typography>
      </Card> 
  </Grid>  
</>
  :




    <Grid container spacing display='flex' direction={'row'}  justifyContent="space-around" >
     
    <Card sx={{
      width: "45%", height: '4vw',
      display: "flex",justifyContent: "center", alignItems: "center", color: "white", backgroundColor: "primary.main", borderRadius: "45px"
    }}><AddchartIcon/>
       <Typography sx={{ml:1}}>Hours Request</Typography> </Card>
    <Card sx={{
      width: "45%", height: '4vw',
      display: "flex", justifyContent: "center", alignItems: "center", color: "white", backgroundColor: "primary.main", borderRadius: "45px"
    }}><HourglassTopIcon/>
      <Typography sx={{ml:1}}>Hours Allocation</Typography></Card>
      </Grid>
     
}
  </>
  )
  }
}
