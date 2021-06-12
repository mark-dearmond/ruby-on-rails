import './App.css';
import Navigation from './Navigation';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Create from './Create';
import Products from './Products';

function App() {
  return (
    <div>
      <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/create" component={Create} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
