import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/GatherInfo/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/GatherInfo/Form";

class Clients extends Component {
  state = {
    clients: [],
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    messageInput: ""

  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName) {
      API.saveClient({
        firstName: this.state.firstName,
         lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        messageInput: this.state.messageInput
      })
         .then(res => this.loadClients())
        .catch(err => console.log(err));
    }
  };



  render() {
    return (
      <Container fluid>
        <Row>

   
            <form>
              <Input
                 value={this.state.firstName}
                 name="firstName"
                 type="text"
                 placeholder="First Name"
                 className="form-control formChange"
                 onChange={this.handleInputChange}
              />
              <Input
                value={this.state.lastName}
                name="lastName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Last Name"
                className="form-control formChange"
              />
               <Input
                      value={this.state.phoneNumber}
                      name="phoneNumber"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="Phone Number"
                      className="form-control formChange"
              />
              <TextArea
                       value={this.state.messageInput}
                       name="messageInput"
                       onChange={this.handleInputChange}
                       type="text"
                       placeholder="Message"
                       rows="9"
                       className="form-control formChange"
              />
              <FormBtn
        
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>

 
        </Row>
      </Container>
    );
  }
}

export default Clients;
