import React from 'react'
import {
  Route,
  Switch,
} from "react-router-dom";
import Home from './Components/Home';
import Crew from './Components/Crew';
import Technology from './Components/Technology';
import Destination from './Components/Destination';


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/crew" component={Crew} />
        <Route path="/technology" component={Technology} />
        <Route path="/destination" component={Destination} />
      </Switch>
    </>
  );
}

export default App;
