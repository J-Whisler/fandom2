import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import AllPosts from './pages/AllPosts/AllPosts';
import MLBPosts from './pages/MLBPosts/MLBPosts';
import NBAPosts from './pages/NBAPosts/NBAPosts';
import NFLPosts from './pages/NFLPosts/NFLPosts';
import NHLPosts from './pages/NHLPosts/NHLPosts';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}  />
          <Route path="/all" exact component={AllPosts}  />
          <Route path="/mlb" exact component={MLBPosts}  />
          <Route path="/nba" exact component={NBAPosts}  />
          <Route path="/nfl" exact component={NFLPosts}  />
          <Route path="/nhl" exact component={NHLPosts}  />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
