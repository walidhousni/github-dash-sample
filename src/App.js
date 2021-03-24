import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from './library/context/github/githubState'
import Header from './components/layout/Header'
import SearchPage from './components/pages/SearchPage'
import DashboardUser from './components/users/DashboardUser'
import DashboardInfos from './components/users/DashboardInfos'

function App() {
  return (
    <GithubState>
      <Router>
      <div className="App">
      <Header />
         <div>
           <Switch>
             <Route exact path="/" component={SearchPage} />
             <Route exact path="/user/:login" render={props => <DashboardUser {...props} />} />
             <Route exact path="/infos/:login" render={props => <DashboardInfos {...props} />} />
           </Switch>
         </div>
        </div>
      </Router>
    </GithubState>

  );
}

export default App;
