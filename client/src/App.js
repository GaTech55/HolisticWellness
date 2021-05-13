import "./App.css";
import Home from "./containers/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./containers/About/About";
import Mind from "./containers/Mind/Mind";
import Footer from "./component/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/mind" component={Mind} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
