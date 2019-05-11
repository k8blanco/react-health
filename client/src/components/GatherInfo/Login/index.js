import React from "react";
import "./Login.css"
import InputMask from "react-input-mask";


import WelcomeLogin from "./images/welcomelogin.gif"
import {
  FormGroup,
  Input,
  Label,
} from "reactstrap";


function Login (props) {
    return (
        <div className="boxInfo mx-auto formColor">
 
        
   <div>

     <img src= {WelcomeLogin} alt="breathe-in-breathe-out"/>
     <div className="text-center mt-4">
      <h2>Let's make a change together</h2>
      <p className="lead">Have someone reach out to you</p>
    </div>

       <div className="row">
          <div className="col-sm">
          <form className="form-group">
            <div className="form-row">
      
            <div className="col">
                  <input
                       value={props.firstName}
                       name="firstName"
                       type="text"
                       placeholder="First Name"
                       className="form-control mac"
                       onChange={props.handleInputChange}
                  />
              </div>
              <div className="col">
                  <input
                  value={props.lastName}
                  name="lastName"
                  onChange={props.handleInputChange}
                  type="text"
                  placeholder="Last Name"
                  className="form-control mac"
                  />
               </div>
               </div>
               <FormGroup>
            <InputMask mask="(999) 999-9999"
             value={props.phoneNumber}
             name="phoneNumber"
             onChange={props.handleInputChange}
             placeholder="Phone Number"
             className="form-control formChange mac"
            >
              {inputProps => <Input {...inputProps} type="text" />}
            </InputMask>
     
            <FormGroup check inline>
           
        <Label check>
          <Input type="radio" name="radio2"  /> Feelings of Suicdality
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
          <Input type="radio" name="radio2" /> Looking for Resourccs
        </Label>
      </FormGroup>
      <FormGroup check inline disabled>
        <Label check>
          <Input type="radio" name="radio2"  /> Administration
        </Label>
      </FormGroup>
        

                   <textarea
                     value={props.messageInput}
                     name="messageInput"
                     onChange={props.handleInputChange}
                     type="text"
                     placeholder="Message"
                     rows="6"
                     className="form-control mac"
                  />
                        </FormGroup>
                  
                   <button className="btn btn-inside btn-boarder" onClick={() => props.setInitial()}>Continue</button>
                </form>

          </div>
      </div>
  </div>


        </div>
        );

    // }
}

export default Login;
