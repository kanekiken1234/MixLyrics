import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from "./components/Navbar";
import Search from './pages/Search';
import Lyrics from './pages/Lyrics';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/lyrics' exact component={Lyrics} />
        <Route path='/' exact component={Search} />
      </Switch>

    </div>
  );
}

export default App;
