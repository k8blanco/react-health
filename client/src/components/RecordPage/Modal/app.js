import React, { Component } from 'react';
import Modal from './modal';
import './modal.css';
import API from "../../../utils/API";
import axios from 'axios';

class ModalLayout extends Component {
  state = {
    showModal: false,
    clinicianMessage: "",
    type : ""
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    }
    );
  
  }



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
   
    });
  };
  
  // this.setState({
  //   cars: [ ...this.state.clincianMessage, ...carArray ]
  // })

  handleFormSubmit = event => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
      API.updateClient(this.props.id, {
        clinicianMessages : [{clincianMessage : this.state.clinicianMessage, type: this.state.type}]
      })
         .then(this.toggleModal)
        .catch(err => console.log(err));
  };
  

  render() {
    return (
      <div className="app">
        <button className="modal_opener" onClick={this.toggleModal}>
          Add Note
        </button>
        
        <Modal
          show={this.state.showModal}
          closeCallback={this.toggleModal}
          customClass="custom_modal_class"
          onChange={this.handleInputChange}
        >
          <React.Fragment>
            <p>{this.props.firstName} {this.props.lastName}</p> 
            <select 
              value={this.state.type} 
              name="type"
              onChange = {this.handleInputChange} 
              className="form-control form-control-sm">
              {console.log(this.state.type)}
                <option>Evaluation</option>
                <option>Online Form</option>
                <option>First Contact</option>
                <option>Telephone Call</option>
            </select>
         
     
            <textarea 
              name="clinicianMessage"
              onChange = {this.handleInputChange} 
              className="form-control" 
              id="exampleFormControlTextarea1" 
              value={this.state.clinicianMessage}
              rows="7">
          </textarea>
            <button type="button"  onClick = {this.handleFormSubmit} className="btn btn-link changeButton">Submit</button>
          </React.Fragment>
        </Modal>
      </div>
    );
  }
}

export default ModalLayout;