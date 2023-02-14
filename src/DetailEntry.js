import { TextField, Button, Box} from "@mui/material";
import "./styles.css";
import React, { Component } from 'react'

export default class DetailEntry extends Component{

    constructor(props) {
        super(props);
        this.state = {
          first: "",
          last: "",
          email: "",
          items: []
        }

      }



  render() {
    const handleFirst = (event) =>{
        console.log(event.target.value);
        this.setState( {first : event.target.value} );
        console.log(this.state.first);
    }
   const handleLast = (event) =>{
        console.log(event.target.value)
        this.setState({ last: event.target.value })
        console.log(this.state.last)
    }
    const handleEmail = (event) =>{
        console.log(event.target.value)
        this.setState({ email: event.target.value })
        console.log(this.state.email)
    }
   const submit = (e) => {
        if(this.state.email===null || this.state.first===null || this.state.last===null){
            let errormsg = ""
            if(this.state.first === ""){
                errormsg += "FirstName " 
            }   
            if(this.state.last === ""){
                errormsg += "LastName " 
            }
            if(this.state.email === ""){
                errormsg += "Email"
            }
            alert(`${errormsg} is not filled`)         
            e.preventDefault()
            
        }
        else if(!this.state.email.includes("@balfourbeatty.com")){
            alert("Email should include @balfourbeatty");
            e.preventDefault()

        }else{

        let login = {
            FirstName : this.state.first,
            LastName: this.state.last,
            Email: this.state.email
        }
        this.state.items.push(login)
        localStorage.setItem('logins',JSON.stringify(this.state.items));
        }
    }

    return (
        <div className="App">
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Box sx={{
            gap: 2,
            width: 300,
            height: 400,
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            flexDirection: "column",
            '&hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
            }
        }}>
            <TextField label="First Name" type="text"
                value={this.state.first} variant="standard"
                sx={{ width: 200, ml: 5 }}
                onChange={handleFirst}
                placeholder="First Name"
                required />
            <TextField label="Last Name" type="text"
                value={this.state.last} sx={{ width: 200, ml: 5 }}
                onChange={handleLast}
                placeholder="Last Name"
                variant="standard" required />
            <TextField type="email" label="Email"
                value={this.state.email} sx={{ width: 200, ml: 5 }}
                onChange={handleEmail}
                placeholder="Email" variant="standard"  required/>

            <Button type="submit" variant="contained"
                onClick={submit} sx={{ width: 200, ml: 5, borderRadius: "5px" }}
                color="primary" >Submit</Button>
        </Box>
        </Box>
        
    </div>
    )
  }
}

