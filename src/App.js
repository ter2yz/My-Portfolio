import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SingleProject from "./views/SingleProject";
import Home from "./views/Home";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/project/:slug" component={SingleProject} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
