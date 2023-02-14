import React, { Component } from 'react'
import { Box, Grid, Paper, Typography, Avatar, Button, Container } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MultiProgress from "react-multi-progress";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


   function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          style={{ ...style}}
          onClick={onClick}
        >
          <ArrowBackIosIcon  className={className} style={{color:"#000"}}/>
        </div>
      );
    }

    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
          <div
          style={{ ...style}}
          onClick={onClick}
        >
          <ArrowForwardIosIcon  className={className} style={{color:"#000"}}/>
        </div>
      );
    }

    function NextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "red" }}
          onClick={onClick}
        />
      );
    }
    
    function PrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "green" }}
          onClick={onClick}
        />
      );
    }


export default class Project extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      data: this.props.data
    }
  }



  handleCallback(key) {

    if (key === 1) {
      this.props.handleChange(1)
    } else if (key === 2) {
      this.props.handleChange(2)
    } else if (key === 3) {
      this.props.handleChange(3)
    } else if (key === 4) {
      this.props.handleChange(4)
    } else if (key === 5) {
      this.props.handleChange(5)
    } else {
      this.props.handleChange(0)
    }
  }

  handleSearch(search) {
    var data_lowercase = search.toLowerCase()
    var search_words = data_lowercase.split(" ")
    search_words = search_words.filter(n => n)
    var filtererd_data = []
    if (search_words.length === 0) {
      filtererd_data = this.props.data
    }
    for (let i = 0; i < this.props.data.length; i++) {
      const element = this.props.data[i];
      var num_of_pass = false
      for (let j = 0; j < search_words.length; j++) {
        const ele = search_words[j];
        num_of_pass = element.searchKey.includes(ele)
        if (!num_of_pass) {
          break
        }
      }
      if (num_of_pass) {
        filtererd_data.push(element)
      }
    }
    this.setState({ data: filtererd_data })
  }




  render() {


    const settings = {
      centerMode: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 300,
      rows: 1,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      adaptiveHeight: true,
      accessibility: true,
      className: "",
    };

    const settings1 = {
      centerMode: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 300,
      rows: 1,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />, 
      className: "",
    };




 
    return (
        <Grid sx={{ flexGrow: 1, display: "flex", flexDirection: "row" }} container direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <Grid container direction="row " justifyContent="center" alignItems="center" spacing={1} >
                
                <Container>
                <Slider {...settings}>
                  {this.state.data.map((el) =>
                    <Box sx={{ p: 2 }}>
                      <Grid item>
                        <Paper sx={{
                          height: 180,
                          width: 320,
                          borderRadius: "15px",
                          boxShadow: 3
                        }}
                        >
                          <Box sx={{ display: "flex", flexDirection: "column", m: 0, }}>
                            <Box sx={{ mx: 2, mt: 1 }}>
                              <Typography sx={{ fontWeight: "bold", color: "primary.main" }} onChange={e => console.log(e)}>{el.projectName}</Typography>
                              <Typography sx={{ fontSize: "12px", color: "black" }}>{el.dsName} - {el.completePresent}% - {el.billable}</Typography>

                              <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", mt: 2 }}>
                                <Typography sx={{ fontSize: "10px", fontWeight: "bold", color: "green" }}>Start: {el.startDate}</Typography>
                                <Typography sx={{ fontSize: "10px", fontWeight: "bold", ml: 1 }}>End: {el.endDate}</Typography>
                                <Button onClick={() => { this.handleCallback(el.status) }} sx={{ m: 0, p: 0, pl: 1 }}><Typography sx={{ fontSize: "10px", fontWeight: "bold", color: '#ffeb3b' }}>
                                  {el.status === 1 ? 'Start Soon' : el.status === 2 ? "Ready to Start" : el.status === 3 ? "Later Due" : el.status === 4 ? "Soon Due" : el.status === 5 ? "Over Due" : null}
                                </Typography></Button>
                              </Box>
                              
                              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 1 }}>
                            
                                  
                                  
                                {el.assigned_users.map(el => 
                                    <Avatar sx={{ bgcolor: "#99cfbb" }}>{el.first_name.charAt(0)}{el.last_name.charAt(0)}</Avatar>
                                )}
                                  
                               
                              </Box>

                              <Box sx={{ mt: 1 }}>
                                <MultiProgress
                                  elements={[
                                    {
                                      value: 100,
                                      color: '#ef6c00',
                                    },
                                  ]}
                                />
                              </Box>

                              <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", mt: 1 }}>
                                <Typography sx={{ fontSize: "10px", fontWeight: "bold", color: "green" }}>Actual: {el.actual}</Typography>
                                <Typography sx={{ fontSize: "10px", fontWeight: "bold", color: "#0d47a1", ml: 1 }}>InProgress: {el.progress}</Typography>
                                <Typography sx={{ fontSize: "10px", fontWeight: "bold", color: '#ef6c00', ml: 1 }}>Assigned: {el.assigned}</Typography>
                                <Typography sx={{ fontSize: "10px", fontWeight: "bold", color: '#fdd835', ml: 1 }}>Remain: {el.remain}</Typography>
                              </Box>

                            </Box>
                          </Box>
                        </Paper>
                      </Grid>
                    </Box>

                  )}

                </Slider>
                </Container>
            </Grid>
          </Grid>
        </Grid>
    )
  }
}





