import React, { Component } from 'react';
import {container, Table, Card, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faDelet, faTrash, faChevronCircleDown, faInfoCircle, faTicketAlt, faStickyNote, faAppleAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons'


class driverList extends Component {
    constructor(){
        super();
        this.state = {
            list:null,
        }
    }

    handleListing = () => {
        fetch("http://3.22.163.24:3001/api/users/driverList")
        .then((res) => res.json()
        .then((result) => {
            console.log(result)  
            this.setState(
                {
                list:result.data
                }
            )
        })
        )
    }
    componentDidMount(){
        this.handleListing();
    }

     handleDelete = (id) =>{
        fetch("http://localhost:3000/restaurant/"+id,
        {
            method : "DELETE",
        })
        .then((result) => {result.json().then((res)=>{
            console.log(res);
        alert("Rrestaurant deleted Successfully")
        this.handleListing();

        })
     })

    }

    render() {
        return (
           <div className="content-wrapper">
            <h2 className="text-center pb-2 ml-5 mr-5 pt-1 headings"> Driver list</h2>
            <Table responsive striped hover bordered style={{"marginLeft":"25px", "display":"-webkit-inline-box","maxHeight":"524px"}}>
                <thead>
                <tr> 
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>Vehicle Number</th>
                    <th>Verify status</th>
                    <th>Operation</th>
                  </tr>
                
                </thead>
                <tbody>
                     {
                    this.state.list ? (
                      this.state.list.map((lists, index) => 
                      {
                    return  (
                           <tr key={index}>
                            <td>{lists.full_name}</td>
                            <td>{lists.email}</td>
                            <td>{lists.contact_number}</td>
                            <td>{lists.address}</td>
                            <td>{lists.vehicle_number}</td>
                            <td>{lists.verifystatus}</td>
                            <td>
                                <NavLink tag={Link} to={"/"} > <FontAwesomeIcon icon = {faInfoCircle}/></NavLink> 
                                &nbsp;&nbsp;&nbsp;&nbsp;<NavLink tag={Link} to={"/"} > <FontAwesomeIcon icon = {faCheckCircle}/></NavLink> 
                             <span onClick={(e)=>{this.handleDelete(lists.id)}} > 
                             &nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon className="ml-3" color="red" cursor="pointer" icon = {faTrash}/></span></td>
                            </tr>
                      )  
                      }))
                     :'Please wait...'
                }
                </tbody>
            </Table>
            </div>
        ); 
    }
}

export default driverList;