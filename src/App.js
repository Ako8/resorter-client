import Dashboard from "./pages/Dashboard";
import Cars from "./pages/Cars"
import LinkNav from "./components/LinkNav";
import Footer from "./components/Footer";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
      <div className="App">
        <LinkNav />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Cars/>               
            </Route>
            <Route path="/dashboard">
              <Dashboard/>               
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;