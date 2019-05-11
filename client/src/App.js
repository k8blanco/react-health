
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Quiz from "./components/GatherInfo/Quiz";
import RecordPage from "./components/RecordPage/Layout";
import DetailRecord from "./components/RecordPage/TimeLineCard";
import Login from './components/Login';
import Register from './components/Register';
import Clients from "./pages/Clients";
import EditorsPage from "./pages/editorspage";
import ContinuePage from './components/GatherInfo/ContinuePage';



function App() {

  return (
    <Router>
      <div>
        <Switch>
    
          <Route exact path="/" component={Quiz} />
          <Route exact path="/statistics" component={ContinuePage} />
          <Route exact path="/recordpage" component={RecordPage} />
          <Route exact path="/editorspage" component={EditorsPage} />
          <Route exact path="/clientside" component ={Clients} />
          <Route exact path="/clients/:id" component={DetailRecord} />
          <Route path='/login' component={Login} />
         <Route path='/register' component={Register} />
          <Route component={NoMatch} />
 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
