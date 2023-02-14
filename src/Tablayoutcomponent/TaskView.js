import { Box, Button, CircularProgress, IconButton, TextField } from '@mui/material';
import Project from './Project';

import React, { Component } from 'react'
import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import Data from '../Data';

var searchInput = ''

export default class TaskView extends Component {
  constructor() {
    super()
    this.state = {
      value: 0,
      search: "",
      data: [],
      isLoading: true
    }
    this.myRef = React.createRef();
    this.handleChange = this.handleChange.bind(this)
    this.searchvalue = this.searchvalue.bind(this)
    this.handleCallback = this.handleCallback.bind(this)
  }
  handleChange(key) {
    this.setState({ isLoading: true })
    if (key === 'all') {
      this.setState({ data: Data},()=>{
        setInterval(() => {
          this.setState({isLoading:false})
        }, 1000);
      })
    } else {
      var data = []
      for (let i = 0; i < Data.length; i++) {
        const element = Data[i];
        if (element.status === key) {
          data.push(element)
        }
      }
      this.setState({ data: data},()=>{
        setInterval(() => {
          this.setState({isLoading:false})
        }, 1000);
      })
    }
    // this.setState(({value: key}), ()=>console.log(this.state)) 
    // var arrayObj = Data.filter( function(el){
    //   if(key===0){
    //     return el
    //   }else{
    //   return el.status === key
    //   }
    // })

    // this.setState({ data: arrayObj }, () => console.log("data" + this.state.data))
    // console.log(this.state.data)


  }
  searchvalue(e) {
    if (this.myRef && this.myRef.current) {
      this.myRef && this.myRef.current.handleSearch(e.target.value)
    }
  }
  handleCallback(childData) {
    this.setState({ value: childData })
  }

  componentDidMount() {
    this.handleChange('all')
    this.setState({ isLoading: false })
  }

  render() {
    return (
      <div>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}>
            <Button variant="text"
              onClick={() => this.handleChange('all')}
              sx={{ px: 6, py: 2, color: "black", fontWeight: "bold", borderRight: 1, borderRightColor: "divider" }}>TO DO</Button>
            <Button variant="text"
              onClick={() => { this.handleChange(1) }}
              sx={{ px: 6, py: 2, color: "black", fontWeight: "bold", borderRight: 1, borderRightColor: "divider" }}>START SOON</Button>
            <Button variant="text"
              onClick={() => this.handleChange(2)}
              sx={{ px: 6, py: 2, color: "black", fontWeight: "bold", borderRight: 1, borderRightColor: "divider" }}>READY TO START</Button>
            <Button variant="text"
              onClick={() => this.handleChange(3)}
              sx={{ px: 6, py: 2, color: "black", fontWeight: "bold", borderRight: 1, borderRightColor: "divider" }}>LATER DUE</Button>
            <Button variant="text"
              onClick={() => this.handleChange(4)}
              sx={{ px: 6, py: 2, color: "black", fontWeight: "bold", borderRight: 1, borderRightColor: "divider" }}>SOON DUE</Button>
            <Button variant="text"
              onClick={() => this.handleChange(5)}
              sx={{ px: 6, py: 2, color: "black", fontWeight: "bold" }}>OVER DUE</Button>
            <Box sx={{ ml: 3 }}>
              <TextField label="Search" onChange={this.searchvalue}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }} />
            </Box>
          </Box>

        </Box>
        {
          this.state.isLoading ? <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}><CircularProgress /></Box> :
            <Box sx={{ mt: 3 }}>
              <Project data={this.state.data} ref={this.myRef} handleChange={this.handleChange} presentSearch={searchInput}/>
            </Box>
        }
      </div>


    )
  }
}

