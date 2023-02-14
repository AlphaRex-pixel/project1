import { Grid } from '@mui/material';
import React, { Component } from 'react'
import Cards from "./components/Cards";
import TabLayout from "./components/TabLayout";



export default class Contact extends Component{

    constructor(props) {
        super(props)
        this.state = {
            value: 0
        };
        this.changeCardView = React.createRef()
        this.handleCallback = this.handleCallback.bind(this)
    }

    handleCallback(view){
        console.log("Parent Value"+this.state.value)
        if (this.changeCardView && this.changeCardView.current) {
            this.setState({ value: view })
            this.changeCardView.current.clicked()
        }
    }


    render() {
        return (
            <div>
                <Cards ref={this.changeCardView} value={this.state.value} />
                
                <TabLayout parentCallback={this.handleCallback}/>
            </div>
        )
    }
}
