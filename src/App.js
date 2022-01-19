import "./App.css";
import Header from "./components/Header/Header";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import Sidebar from "./components/Sidebar/Sidebar";

// reat-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchResult from "./components/Searchresult/SearchResult";

function App() {
  return (
    <div className="app">
      {" "}
      {/* Header component */}{" "}
      <Router>
        <Switch>
          <Route path="/search/:searchTerm">
              <Header />
            <div className="app__page">
              <Sidebar  />
              <SearchResult />
            </div>
          </Route>
          <Route path="/">
            <Header />
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
