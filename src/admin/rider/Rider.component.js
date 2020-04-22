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
import { faCoffee, faEdit, faDelet, faTrash } from '@fortawesome/free-solid-svg-icons'


class riderList extends Component {
    constructor(){
        super();
        this.state = {
            list:null,
        }
    }

    handleListing = () => {
        fetch("http://3.22.163.24:3001/api/users/riderList")
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
            <h2 className="text-center pb-2 ml-5 mr-5 pt-1 headings"> Rider list</h2>
            <Table responsive striped hover bordered style={{"marginLeft":"25px", "display":"-webkit-inline-box","maxHeight":"524px"}}>
                <thead>
                <tr> 
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                  </tr>
                
                </thead>
                <tbody>
                     {
                    this.state.list ? (
                      this.state.list.map((lists, index) => 
                      {
                    return  (
                           <tr key={index}>
                             <td>{lists.name}</td>
                             <td>{lists.email}</td>
                             <td>{lists.contact}</td>
                                <td>{lists.address}</td>
                                <td>{lists.city}</td>
                                <td>{lists.state}</td>              
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

export default riderList;