
import { Grid } from '@mui/material'
import React, { Component } from 'react'
import Description from '../Infocomponent/Description'
import Infochart from '../Infocomponent/Infochart'
import Name from '../Infocomponent/Name'
import Teams from '../Infocomponent/Teams'

export default class MainInfo extends Component {
  render() {
    return (
      <Grid container sx={{height: '10vw',
        backgroundColor: 'transparent' ,
        borderRadius: '16px', 
        }}>

        <Grid item xs={3} sx={{borderRight: 1, py:1, borderRightColor: "divider"}}>
            <Name/>
        </Grid>

        <Grid item xs={3} sx={{borderRight: 1, py:1, borderRightColor: "divider"}}>
          <Teams/>
        </Grid>

        <Grid item  xs={3} sx={{borderRight: 1, py:1, borderRightColor: "divider"}}>
          <Description/>
        </Grid>
        <Grid item  xs={3}>
            <Infochart/>
        </Grid>
      </Grid>
    )
  }
}
