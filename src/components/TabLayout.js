import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Info from '../Tablayoutcomponent/Info';
import Tabs from '@mui/material/Tabs';



export default class TabLayout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 1
    }
  }


  render() {
    const handleChange = (event, newValue) => {
      this.setState({ value: newValue }, () => {
        console.log("Child 1 value "+this.state.value)
        this.props.parentCallback(this.state.value)
      })

    };
    return (
     
      <div>
        <Box sx={{ typography: 'body1', mt: 1 }}>
          <TabContext value={this.state.value}>
            <Box>
              <Tabs onChange={handleChange}>
              <TabList  aria-label="lab API tabs example">
                <Tab label="MyTasks" value={1} sx={{
                  borderRadius: "20px 20px 0 0", border: 3, color: "black", px: 6,
                  borderColor: "black",
                  '&:hover': {
                    backgroundColor: "secondary.main",
                  }
                }} />
                <Tab label="TeamTasks" value={2} sx={{
                  borderRadius: "20px 20px 0 0", borderColor: "black", border: 3,color: "black",px: 6,
                  '&:hover': {
                    backgroundColor: "secondary.main",
                  }
                }} />
              </TabList>
              </Tabs>
            </Box>
            <TabPanel value={1} sx={{mt: 2,p:0}}><Info/></TabPanel>
            <TabPanel value={2}>Item Two</TabPanel>
          </TabContext>
        </Box>
      </div>
    )

  }
}
