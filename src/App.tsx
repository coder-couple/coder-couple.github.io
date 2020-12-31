import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>

                    <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</Link>

                    <Link to="/projects" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route path="/about">
            About Us
          </Route>
          <Route path="/projects">
            Projects
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
