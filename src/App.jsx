import React  from 'react';
import Main from './Main';
import Form from './Form';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App=()=>{
  return( 
<>
<Router>

  <Switch>
    <Route exact path="/" component={Main}/>

    <Route exact path="/form" component={Form}/>
 

  </Switch>
</Router>
 
</>
  )
}
export default App;





