
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


class FareManagement extends Component {
    constructor(){
        super();
        this.state = {
            list:null,
        }
    }

    handleListing = () => {
        fetch("http://localhost:3001/api/pricemanagement/getPricingDetail")
        .then((res) => res.json()
        .then((result) => {
            console.log(result)  
            this.setState({list:result})
        })
        )
    }

    componentDidMount(){

        this.handleListing();
    
        console.log(this.state.list)
    }


    render() {
        return (
           <React.Fragment>
               
            <h2 className="text-center pb-2 ml-5 mr-5 pt-1 headings"> Restaurant list</h2>
            <Table striped hover bordered>
                <thead>
                    <tr>
                    <th>Sr.</th>
                    <th>Price per km</th>
                    <th>Min Price</th>
                    <th>Min distance fix price</th>
                    <th>Driver commission percent</th>
                    </tr>
                </thead>
                <tbody>
                     {
                    this.state.list ? (
                    this.state.list.map((lists) => 
                      {
                    return  (
                            <tr>
                            <th scope="row">{lists.id}</th>
                            <td>{lists.price_per_km}</td>
                            <td>{lists.min_price_till_5km}</td>
                            <td>{lists.min_distance_fix_price}</td>
                            <td>{lists.driver_commision_percent}</td>
                            </tr>
                      )
                      }))
                     :'Please wait...'
                }
                </tbody>
            </Table>
            </React.Fragment>
        ); 
    }
}

export default FareManagement;