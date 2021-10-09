import { Route, Switch } from "react-router-dom";
import "./App.css";
import Bookmark from "./components/bookmark/bookmark";
import Header from "./components/header/header";
import MainPage from "./components/mainPage/mainPage";
import Users from "./components/users/users";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/users/:userId?" component={Users} />
        <Route path="/bookmark" component={Bookmark} />
        {/* <Route path="/404" component={NotFound} /> */}
        {/* <Redirect to="/404" /> */}
        <Route path="/" exact component={MainPage} />
      </Switch>
    </>
  );
}

export default App;
