import './App.css';
import { Home } from './pages/home.jsx';
import { Case } from './pages/caseStatus.jsx';
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import {Footer, FooterSection} from './components/footer.jsx'
import {HeaderSection} from './components/header.jsx'

function App() {
  return (
<BrowserRouter>
     <div className="App">
       <HeaderSection />
     <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/case' component={Case} />
    </Switch>
    <FooterSection />
    </div>
    </BrowserRouter>
  );
}

export default App;
