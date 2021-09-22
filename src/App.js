import { Router, Route, Switch } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Porfolio from './components/Portfolio';
import history from './utils/history';

const App = () => {
  return (
    <>
      <Router history={history}>
        <div>
          <Switch>
            <Route path='/' exact component={MainMenu} />
            <Route path='/portfolio' component={Porfolio} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
