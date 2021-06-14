import './App.css';
import { Home } from './pages/home.jsx';
import { Case } from './pages/caseStatus.jsx';
import { MobileCase } from './pages/mobileCaseStatus.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { FooterSection } from './components/footer.jsx';
import { HeaderSection } from './components/header.jsx';
import { MobileHeaderSection } from './components/mobile_header.jsx';
import { Gallery } from './pages/gallery2.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { MobileFooterSection } from './components/mobile_footer';




function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <BrowserRouter>
      <div className="App">
        {
          matches ? <MobileHeaderSection /> : <HeaderSection />
        }
        <Switch>
          <Route exact path='/' component={Home} />
          {
            matches ? <Route exact path='/status' component={MobileCase} /> : <Route exact path='/status' component={Case} />
          }
          <Route exact path='/gallery' component={Gallery} />
          <Route component={NotFound} />
        </Switch>
        {
          matches ? <MobileFooterSection /> : <FooterSection />
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
