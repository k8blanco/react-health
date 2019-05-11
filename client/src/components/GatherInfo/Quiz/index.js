import React, { Component } from "react";
// import Questions from "../Questions"
import Login from '../Login'
// import ContinuePage from "../ContinuePage"
import API from "../../../utils/API";
import {Container} from "../ContainerBox"
import NavTabs from "../../NavTabs"
import Clogin from '../Clogin'

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle
} from "reactstrap";


class Quiz extends Component {

  state = {
    results: [],
    clients: [],
    firstName: "",
    lastName: "",
    message: "",
    phoneNumber: "",
    messageInput: "",
    birthdate: "",
    race : "",
    hSuicidal: "",
    _id: "",
    intial: true,
    goToQuiz: true,
    displayQuestions: false
    
  }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   event.preventDefault();
  //   // if (!this.state.firstName || !this.state.lastName) {
  //     alert("Fill out your first and last name please!");
  //   // }  else {
  //     this.setState({ intial: false })

  //   // }

  //   this.setState({
  //     firstName: "",
  //     lastName: "",
  //     phoneNumber: "",
  //     displayQuestions: false
  //   });
  // };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  setInitial = event => {
      this.setState({ intial: false })
  };

  handleStartQuiz = event => {
    this.setState({goToQuiz : false})
    this.setState({displayQuestions : true})

  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName) {
      API.saveClient({
        firstName: this.state.firstName,
         lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        messageInput: this.state.messageInput,
        race: this.state.race,
        hSuicidal: this.state.hSuicidal,
        birthdate: this.state.birthdate,
      })
        .then(this.handleStartQuiz)
        .catch(err => console.log(err));
    }
  };


      // API.updatethisClient(this.state._id, {
      //   race : (this.state.race), 
      //   hSuicidal : (this.state.hSuicidal), 
      //   birthdate :(this.state.birthdate)
      // })
      //    .then(res => this.loadClients())
      //   .catch(err => console.log(err));
  // };


  renderPage = () => {

    if (this.state.intial){

      return  (
        <div>

        <Container>
        
        <Login 
        firstName ={this.state.firstName}
        // randomName ={this.state.randomName}
        lastNmae ={this.state.lastName}
        phoneNumber={this.state.phoneNumber}
        messageInput ={this.state.messageInput}
        setInitial = {this.setInitial}
       
        handleInputChange= {this.handleInputChange}
        class="styleQuiz"
    />
    </Container>
    </div>
  )
     }

     if (this.state.goToQuiz){

      return (
        <div>
     
        <Container>
        <Clogin 
            birthdate = {this.state.birthdate}
            race = {this.state.race}
            hSuicidal = {this.state.hSuicidal}
            // secondSubmit = {this.secondSubmit}
             handleFormSubmit = {this.handleFormSubmit}
            handleInputChange= {this.handleInputChange}
        />
        </Container>
  </div>
        
      )
      }


    if (this.state.displayQuestions === true){
   
      return(   
      
      <div>
        <Container>
        <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
       This Webpage is just an Example and not Monitored. 
      </CardTitle>
    </CardHeader>
    <CardBody>
      <div id="introduction">
        <p className="lead">
        If you are in real pain or are having suicidal thoughts please reach out to the National Suicide Prevention Hotline.
          1-800-273-8255
        </p>
        <p>Thanks you.</p>
      </div>
    </CardBody>
  </Card>
   
  
 
      </Container>
      </div>

      )


    
    // return this.state.options.map(option => {
      
    //   return (
    //     <div>
    //     <Questions
    //       id={option.id}
    //       key={option.id}
    //       name={option.name}
    //       score={option.score}
    //     />
    //   </div>
    
    //   ); 
    //   }) 
    }

    else {
      return "Hello"
    }
  }


  render(){
    return (
      <div>
       <NavTabs />
        
 
          <div className="card container mx-auto">
            <div className="container card-body">
              <div class="video-container">
                {/* {this.renderVideo()} */}
                  {this.renderPage()}
              </div>
           </div>
       </div>
       </div>
        );
}

}
export default Quiz;
