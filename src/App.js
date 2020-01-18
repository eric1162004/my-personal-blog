import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateBlog from './components/blogs/CreateBlog'
import BlogDetails from './components/blogs/BlogDetails'
import Footer from './components/layout/Footer'
import Parallax from './components/layout/Parallax'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <NavBar />
          
          {/* Switch: only 1 route will be loaded at a time */}
          <Switch>
            
            {/* exact: only load when the route matches exactly  */}
            <Route exact path='/' component={Dashboard}/>
            <Route path='/blog/:id' component={BlogDetails}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/create' component={CreateBlog}/>
          </Switch>

          <Parallax/>

          <Footer/>

        </div>
      </BrowserRouter>
    )
  }
}

export default App;
