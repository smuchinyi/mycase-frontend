import './App.css';
import { Home } from './pages/home.jsx';
import { Case } from './pages/caseStatus.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Footer, FooterSection } from './components/footer.jsx';
import { HeaderSection } from './components/header.jsx';
import { Gallery } from './pages/gallery2.jsx';
import {NotFound } from './pages/NotFound.jsx';
import {Pdf} from './pages/pdfPage';



function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <HeaderSection />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/status' component={Case} />
          <Route exact path='/gallery' component={Gallery} />
           <Route exact path='/pdf' component={Pdf} />
          <Route component={NotFound}/>
        </Switch>
        <FooterSection />
      </div>
    </BrowserRouter>
  );
}

export default App;
