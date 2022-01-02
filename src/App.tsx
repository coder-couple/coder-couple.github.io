import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/contact';
import Navigation from './components/navigation';
import Projects from './components/projects';

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
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
