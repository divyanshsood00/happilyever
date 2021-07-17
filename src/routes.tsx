import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Login from './components/login'
import Profile from './components/profile'
import Signout from './components/signout'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/signout'>
          <Signout />
        </Route>      
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
