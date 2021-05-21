import "./App.css";
import Home from "./containers/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./containers/About/About";
import Mind from "./containers/Mind/Mind";
import Body from "./containers/Body/Body";
import Spirit from "./containers/Spirit/Spirit";
import Motherhood from "./containers/Motherhood/Motherhood";
import Footer from "./component/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/mind" component={Mind} />
        <Route exact path="/body" component={Body} />
        <Route exact path="/spirit" component={Spirit} />
        <Route exact path="/motherhood" component={Motherhood} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
