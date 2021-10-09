import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import MainPage from "./components/mainPage/mainPage";
import NotFound from "./components/notFound/notFound";
import Users from "./components/users/users";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/users/:userId?" component={Users} />
        <Redirect from="/react-hackaton" to="/" />
        <Route path="/404" component={NotFound} />
        <Route path="/" exact component={MainPage} />
        <Redirect to="/404" />
      </Switch>
    </>
  );
}

export default App;
