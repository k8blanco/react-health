import React from "react";
import InputMask from "react-input-mask";

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  FormGroup,
  Label,
  Row,
  Input,
} from "reactstrap";



function Clogin (props) {
    return (
        <div className="boxInfo mx-auto formColor">
           <div className="text-center mt-4">
      <h2>Mental Health is Complicated </h2>
      <p className="lead">The following is optional... feel free to explore the rest of the site... but the more information you provide the better we can serve you. </p>
    </div>
    <CardBody>
          <Row>
          <Col lg="6">
            <FormGroup>
            <InputMask 
            value={props.birthdate}
            name="birthdate"
            onChange={props.handleInputChange}
            placeholder="Birthdate"
            mask="99/99/9999"
            className="form-control mac">
              {inputProps => <Input {...inputProps} type="text" />}
            </InputMask>
            </FormGroup>
            </Col>
            <Col lg="6">
            <FormGroup>
            <Input
              value={props.race}
              name="race"
              onChange={props.handleInputChange}
              className="form-control mac"
             type="text"  placeholder="Race " />
          </FormGroup>
          </Col>
          </Row>
          <Card>


          <Card>
          <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Please Check All that Apply: 
      </CardTitle>
    </CardHeader>
          <CardBody>
          <FormGroup check className="mb-2">
        <Label check>
          <Input type="checkbox" /> I have had a head injury that caused me to pass out.
        </Label>
      </FormGroup>
      <FormGroup check className="mb-2">
        <Label check>
          <Input type="checkbox" /> I feel lonely all the time.
        </Label>
      </FormGroup>
      <FormGroup check className="mb-2">
        <Label check>
          <Input type="checkbox" /> I do not have access to resources.
        </Label>
      </FormGroup>
      <FormGroup check className="mb-2">
        <Label check>
          <Input type="checkbox" /> I know family or friends who have commited suicide.
        </Label>
      </FormGroup>
      <FormGroup check className="mb-2">
        <Label check>
          <Input type="checkbox" /> I actively give back to my community.
        </Label>
      </FormGroup>
      <FormGroup check className="mb-2">
        <Label check>
          <Input type="checkbox" /> I have family or friends I can go to when I am struggling.
        </Label>
      </FormGroup>
      </CardBody>
      </Card>
  </Card>
     
         <FormGroup>
       <Label>History of Suicidal Thoughts or Attempts:</Label>
       <textarea 
      value={props.hSuicidal}
      name="hSuicidal"
      onChange={props.handleInputChange}
       type="textarea" 
       className="form-control mac"
        />
      </FormGroup>

    <button className="btn btn-inside btn-boarder" onClick={props.handleFormSubmit} >Send</button>
    </CardBody>

 
        
   <div>

     
      
           
           
            
              
           
 

        

                  
            
                  
          

     
 
  </div>


        </div>
        );
}

export default Clogin;
