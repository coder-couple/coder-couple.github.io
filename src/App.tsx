import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation';
import Projects from './Components/Projects';

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
          <Route path="/projects"><Projects/></Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
