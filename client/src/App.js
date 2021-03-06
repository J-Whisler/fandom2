import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import AllPosts from './pages/AllPosts/AllPosts';
import MLBPosts from './pages/MLBPosts/MLBPosts';
import NBAPosts from './pages/NBAPosts/NBAPosts';
import NFLPosts from './pages/NFLPosts/NFLPosts';
import NHLPosts from './pages/NHLPosts/NHLPosts';
import AddPost from './pages/AddPost/AddPost';
import SinglePost from './pages/SinglePost/SinglePost';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}  />
          <Route path="/addpost" component={AddPost} />
          <Route path="/all" component={AllPosts}  />
          <Route path="/mlb" component={MLBPosts}  />
          <Route path="/nba" component={NBAPosts}  />
          <Route path="/nfl" component={NFLPosts}  />
          <Route path="/nhl" component={NHLPosts}  />
          <Route path="/singlepost/:id" component={SinglePost} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
