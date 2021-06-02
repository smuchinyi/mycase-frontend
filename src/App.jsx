import './App.css';
import { Home } from './pages/home.jsx';
import { Case } from './pages/caseStatus.jsx';
import { BrowserRouter, Route ,Switch} from 'react-router-dom'


function App() {
  return (
<BrowserRouter>
     <div className="App">
     <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/case' component={Case} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
