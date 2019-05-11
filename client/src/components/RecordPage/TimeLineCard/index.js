import React, { Component } from "react";
import API from "../../../utils/API";
import SideBarTest from "../SideBar";
import ModalLayout from "../Modal/app";
import axios from 'axios';
import first from "./images/first1.png"
import form from "./images/form.png"
import inperson from "./images/inperson.png"
import phone from "./images/phone.png"
import "./styles.scss"


class DetailRecord extends Component{
  state = {
    client: {},
    clinicianMessages: {},
  }
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    API.getClient(this.props.match.params.id)
      .then(res => this.setState({ client: res.data }))
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  renderImage = (type) => {
    if (type === "Evaluation") {
        return <img src={inperson} className="imageTimeLine" alt="..."/>
    }
    if (type === "Online Form") {
        return <img src={form} className="imageTimeLine" alt="..."/>
    }
    if (type === "First Contact") {
        return <img src={first} className="imageTimeLine" alt="..."/>
    }
    if (type === "Telephone Call") {
        return <img src={phone} className="imageTimeLine" alt="..."/>
    } else {
        return <img src={form} className="imageTimeLine" alt="..."/>
    };

}

  renderPage = () => {

    if (this.state.client.clinicianMessages){

      return  (
        <div>

 


        <div className="indContainer">
        <h1 className="top">Medical Journal --   {"    "}
        <ModalLayout
     firstName = {this.state.client.firstName} 
     lastName = {this.state.client.lastName} 
     clinicianMessages = {this.state.client.clinicianMessages}
     id={this.state.client._id}
     renderPage = {this.renderPage}
    
    />
        
        </h1>
        {this.state.client.clinicianMessages.map(cMessage => ( 
         <div>
         <div className="vl"></div>
           <article className="timeline">
                  <section className="timeline__section ">
                  <article className="timeline">
                  <nav className="timeline__nav ">
                  <ul >
                  <li>
                  {this.renderImage(cMessage.type)}
                  <span className="milestone">{cMessage.type}</span>
                      </li>
                      </ul>
                    </nav>
                    <div className="media-body wrapper">
                            {cMessage.clincianMessage}
                        </div>
                    </article>
                </section>
            </article>
          </div>
   
         ))}
            </div>
        {/* {this.state.client.clinicianMessages.map(cMessage => (
   <tbody>
    <tr>   
      <td> {cMessage.type} </td>
      <td> {cMessage.clincianMessage} </td>
         
       </tr>
          </tbody>
         ))} */}

    </div>
  )
      }

    else {
      return "Hello"
    }
  }
   


  render() {
    return (
      <div>

<SideBarTest
 firstName = {this.state.client.firstName} 
 lastName = {this.state.client.lastName} 
 phoneNumber = {this.state.client.phoneNumber}
 messageInput = {this.state.client.messageInput}
 birthdate = {this.state.client.birthdate}
 race = {this.state.client.race}
 hSuicidal = {this.state.client.hSuicidal}

 
 

 /> 

     {/* <ClientInfo
         firstName = {this.state.client.firstName} 
        
        >
       <h1>
       {this.state.client.firstName} {"   "}
        {this.state.client.lastName}
        </h1>
     </ClientInfo> */}



    <div className="MainContent card">



  {/* {this.state.client.clinicianMessages.map(cMessage => (
   <tbody>
    <tr>
          <td> {cMessage.clincianMessage} </td>
          <td> {cMessage.type} </td>
       </tr>
          </tbody>
         ))} */}
       {this.renderPage()}

    </div>
    </div>
    )
  }
}

export default DetailRecord;
