import React from "react";
import {Container} from "../components/GatherInfo/ContainerBox"
import NavTabs from "../components/NavTabs"

import {
    Card,
    CardBody,
    CardHeader,
    CardTitle
  } from "reactstrap";
  

function EditorsPage () {
    return(
      <div>
      <NavTabs />
<Container>

<Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Welcome
      </CardTitle>
    </CardHeader>
    <CardBody>
      <div id="introduction">
        <p className="lead">
        A great amount of thought went into trying to understand what interacting with a website would mean when one is extremely sad or distraught. I took out bold colors and flashing alerts. I restricted Navigating the website down to only two tabs, so when somone is in need they can find exactly what they are looking for... help out of a situation. 
        The rate of the growing triangle can be used to sync breathing in times of stress. 
        </p>
        <p>Thanks you.</p>
      </div>
    </CardBody>
  </Card>

</Container>
</div>
)
}

export default EditorsPage;