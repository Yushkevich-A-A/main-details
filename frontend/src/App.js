import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ItemPage from './pages/ItemPage/ItemPage';
import MainPages from './pages/MainPages/MainPages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={MainPages}/>
          <Route exact path='/:id/details' component={ItemPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
