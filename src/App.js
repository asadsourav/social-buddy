import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import PostDetails from './components/Postdetails/PostDetails';
import NoMatch from './components/NoMatch/NoMatch';


function App() {
  return (
   <Router>
     <Switch>
       <Route path = "/home">
          <Home></Home>
       </Route>

       <Route path = "/post_details/:postId">
         <PostDetails></PostDetails>
        </Route>

        <Route exact path = "/">
          <Home></Home>
       </Route>
        
        <Route  path = "*">
          <NoMatch></NoMatch>
        </Route>
     </Switch>
   </Router>
  );
}

export default App;
