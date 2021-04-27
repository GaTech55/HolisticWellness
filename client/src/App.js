import './App.css';
import Home from './containers/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
