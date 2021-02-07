import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route path="/about">About Us</Route>
          <Route path="/projects">Projects</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
