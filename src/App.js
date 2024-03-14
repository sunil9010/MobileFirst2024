import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  </div>
)

export default App
