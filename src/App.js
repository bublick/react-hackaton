import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Bookmark from "./components/bookmark/bookmark";
import Header from "./components/header/header";
import MainPage from "./components/mainPage/mainPage";
import NotFound from "./components/notFound/notFound";
import User from "./components/user/user";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/user" component={User} />
        <Route path="/bookmark" component={Bookmark} />
        <Route path="/404" component={NotFound} />
        <Route path="/" exact component={MainPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
