import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Toolbar,Backdrop,Prevention,Contact} from './components';
import { Route, BrowserRouter } from 'react-router-dom'

const routing = (
    <BrowserRouter>
      <div> 
        <Toolbar/>
        <sideDrawer/>
        {Backdrop}
        <Route exact path="/" component={App} />
        <Route exact path='/Prevention' component={Prevention}/>
        <Route exact path='/Contact' component={Contact}/>
        
      </div>
    </BrowserRouter>
    
  )
  ReactDOM.render(routing , document.getElementById('root'));