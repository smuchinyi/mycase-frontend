import './App.css';
import { Home } from './pages/home.jsx';
import { Case } from './pages/caseStatus.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { FooterSection } from './components/footer.jsx';
import { HeaderSection } from './components/header.jsx';
import { Gallery } from './pages/gallery2.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { RefugeeResources } from './components/refugee_resources';


function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderSection />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/status' component={Case} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/refugee-resources' component={RefugeeResources} />
          <Route component={NotFound} />
        </Switch>
        <FooterSection />

      </div>
    </BrowserRouter>
  );
}

export default App;
