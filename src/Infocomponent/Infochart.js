import { Box } from '@mui/material';
import React, { Component } from 'react';
import Chart from "react-apexcharts";

export default class Infochart extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [44, 55, 67],
      options: {
        chart: {
          height: 300,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '18px',
              },
              value: {
                fontSize: '14px',
              },
              total: {
                show: true,
                label: 'Total',
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 249
                }
              }
            }
          }
        },
        labels: ['Planned', 'Completed', 'Approved'],
        legend: {
          show: true,
        }
      },
    
    
    }
  }
  
  render() {
    return (
      <Box sx={{}}>
      <Chart options={this.state.options} series={this.state.series} type="radialBar" height={150} />
      </Box>
    )
  }
}

