import './App.css';
import Navigation from './Navigation';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Create from './Create';
import Listings from './Listings';

function App() {
  return (
    <div>
      <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/" component={Listings} />
            <Route path="/create" component={Create} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
