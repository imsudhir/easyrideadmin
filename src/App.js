import React, { Component } from 'react'
import { Redirect, hashHistory} from 'react-router';

import axios from 'axios'; 
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter, 
  Link
} from 'react-router-dom'; 
import {container, Table, Card, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

import DriverList from "./admin/driver/Driver.component";
// import Abc from "./admin/driver/AdminLogin.component";
import RiderList from "./admin/rider/Rider.component";
import Faremanagement from "./admin/fare/Fare.component";


class AdminLogin extends Component {
  constructor(props){
    super(props); 
    this.state = {
        user:{
            email:'',
            password:'',
            token:''
        },
      isLoggedin:false
    }


}

componentDidMount()
{
  console.log(this.state)

  let Auth_token = localStorage.getItem('login_auth_token', this.state.token); 
 
  console.log(Auth_token)
  if(Auth_token){
    console.log('token found')
    this.setState({
      ...this.state,
    isLoggedin:true 
  })
  } else {
    console.log('token not found')
  }

}
componentDidUpdate(){
  
}

login_auth(){
  axios.post("http://3.22.163.24:3001/api/users/adminlogin", { 
    "email":this.state.user.email,
    "password":this.state.user.password
   })
    .then(response => {
      console.log(response.data)
      if(response.data.token && response.data.success){
        this.setState({
          ...this.state,
          user:{
            token:response.data.token
          },
          isLoggedin:true
         })
        localStorage.setItem('login_auth_token', this.state.user.token);
  const Swal = require('sweetalert2')
  const MySwal = withReactContent(Swal)

  MySwal.fire({
    title: <p>Hello World</p>,
    footer: 'Copyright 2018',
    onOpen: () => {
      // `MySwal` is a subclass of `Swal`
      //   with all the same instance & static methods
      MySwal.clickConfirm()
    }
  }).then(() => {
    return (
      MySwal.fire(
        'Dear Admin',
        'Welcome to dashboard',
        'success'
      )).then(()=>{
        return(window.location.reload(false))
      })

  })
  //...................
    // window.location.reload(false)
      } else {
        this.setState({
          ...this.state,
          user:{
            email:'',
            password:'',
            token:'' 
           },
          isLoggedin:false, 
         })
       document.getElementById("loginerror").style.display="block";
      }
      console.log(this.state)
    })
    .catch(error => this.setState({ error, isLoggedin: false }));
}

handleEmail = (e) => {
  console.log(e.target.value);
  this.setState({
   ...this.state,
      user:{
        ...this.state.user,  
        email:e.target.value 
      }
   })
 }

handlePassword = (e) => {
  console.log(e.target.value);
 document.getElementById("loginerror").style.display="none";
  this.setState({
   ...this.state,
      user:{
        ...this.state.user,  
        password:e.target.value 
      }
   })
}

handleSubmit = (e) => {

//.........................................................
    
        e.preventDefault();
        this.login_auth();
 
        }
   
    render() {
      {console.log(this.state.user.token.length)}
        return (
    <React.Fragment>
        {this.state.user.token.length!==0 ? (
        <React.Fragment>
        {/* {alert("Redireting..")} */}
       {<Redirect to="/drivers" />}
        {/* {window.top.location = window.top.location} */}
        {/* {this.props.history.push("/tutdashboard")} */}
           
         </React.Fragment>)
       : 
        <React.Fragment>
       <Redirect to="/admin" />
       </React.Fragment>
        
        }
    <Form style={{boxShadow:"3px 3px 3px px red"}} onSubmit = {this.handleSubmit}>
<center>    <h2>Admin Login</h2></center> 

    <container>

    <Row> 
      <Col sm="4" md="4" lg="4"></Col>
        <Col sm="4" md="4" lg="4">
          <FormGroup>
             <Input type="email" name="email" onChange={this.handleEmail} id="stdloginEmail" required={true} value={this.state.user.email} placeholder="Email" />
            <span id="emailerror" style={{color:"red", display:"none"}}>Enter correct Email</span>
          </FormGroup>
        </Col>
      <Col sm="4" md="4" lg="4"></Col>
      </Row>
     <Row>
      <Col sm="4" md="4" lg="4"></Col>
      <Col sm="4" md="4" lg="4">
      <FormGroup>
         <Input type="password" name="stdloginpass" onChange={this.handlePassword} id="stdloginpass" autoComplete="off" required={true} value={this.state.user.password} placeholder="Password"/>
         <span id="passworderror" style={{color:"red", display:"none"}}>Password must have at least one digit (length 5-20)</span>
        <span id="loginerror" style={{color:"red", display:"none"}}>Incorrect login details !! try again.. </span>
      </FormGroup>
      </Col>
      <Col sm="4" md="4" lg="4"></Col>
     </Row>
     <Row >
      <Col sm="4" md="4" lg="4"></Col>
      <Col sm="4" md="4" lg="4">
      {/* <FormGroup> */}
     <Button color="primary" size="md" block>Login</Button>
      {/* </FormGroup> */}
      </Col>
      <Col sm="4" md="4" lg="4"></Col>
     </Row>
    </container>
    </Form>
    </React.Fragment>
        );
    } 
}
  
export default class App extends Component {
  // console.log(localStorage.getItem('login_auth_token'));
  render() {
    return (
      
        <Router>
          <Switch>
          {(localStorage.length==1) ?
          <React.Fragment>
           <Route exact path="/">
          <Header />
          <Menu />
           <Footer />
        </Route>
          <Route path="/drivers">
          <Header />
          <Menu />
          <DriverList />
          <Footer />
          </Route>
         
          <Route path="/riders">
          <Header />
          <Menu />
          <RiderList />
          <Footer />
          </Route> 
          </React.Fragment>:
          <React.Fragment>
  <Redirect push to="/admin" />
          <Route path="/admin">
          <AdminLogin />
          </Route>

          </React.Fragment>
        
          }
            {/* <Route path="/riders">
          <RiderList />
          </Route> */}
          </Switch>
         </Router>
      
    )
  }
}
