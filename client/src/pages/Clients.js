import React, { Component } from "react";
import axios from 'axios';
import API from "../utils/API";
import { Link } from "react-router-dom";

import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
  Table
} from "reactstrap";



// import { MoreHorizontal } from "react-feather";


class ClientsList extends Component {
  state = {
    clients: [],
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    messageInput: ""
  }


  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    API.getClients()
    .then (res => this.setState({ clients: res.data, firstName: "", lastName: "", phoneNumber: "" }))
    .catch((error) => {
      if(error.response.status === 401) {
        this.props.history.push("/login");
      }
    });
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render() {
    return (
      <Container fluid className="p-0">
        <Row>
            <Col xl="8">
  <Card>
    
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Clients
        {" "}
        {localStorage.getItem('jwtToken') &&
       <button class="btn btn-primary" onClick={this.logout}>Logout</button>
     }
      </CardTitle>
    </CardHeader>
    {this.state.clients.length ? (
    <CardBody>
      <Table className="mb-0">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Birthdate</th>
            <th>Status</th>
          </tr>
        </thead>
        {this.state.clients.map(client => (
        <tbody key= {client._id}>
          <tr>
            <Link to={"/clients/" + client._id}>
            <td>{client.firstName}</td>
            </Link>
            <td>{client.lastName} </td>
            <td> {client.phoneNumber} </td>
            <td> {client.birthdate} </td>
            <td><Badge color="success">Active</Badge></td>
          </tr>
          </tbody>
          ))}
      </Table>
    </CardBody>
     ) : (
      <h3>No Results to Display</h3>
    )}
  </Card>
  </Col>
  <Col xl="4">
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        General Overview of Clients
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Row noGutters>
        <Col sm="9" xl="12" className="col-xxl-9">
          <strong>Number of Clients</strong>
          <p>
          {this.state.clients.length}
          </p>
        </Col>
      </Row>

  

      <hr />


    </CardBody>
  </Card>
      </Col>
  </Row>
  </Container>

) } }

export default ClientsList;
