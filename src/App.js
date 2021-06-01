import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from './components/Project';

const App = () => {
  return (
    <Router>
      <Switch> 
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about'/>
        <Route component={SinglePost} path='/post/:slug'/>
        <Route component={Post} path='/post'/>
        <Route component={Project} path='/project'/>
        </Switch>
    </Router>
  )
}

export default App;