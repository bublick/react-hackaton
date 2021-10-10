import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import MainPage from "./components/mainPage/mainPage";
import NotFound from "./components/notFound/notFound";
import Users from "./components/users/users";
const routes = [
  { path: "/", name: "Главная", Component: MainPage },
  { path: "/users", name: "Команда", Component: Users },
  { path: "/users/:userId", name: "Член", Component: Users },
  { path: "/404", name: "404", Component: NotFound },
];

function App() {
  return (
    <>
      <Header />
      <div className="">
        <Switch>
          <Redirect from="/react-hackaton" to="/" />
          {routes.map(({ path, name, Component }, key) => (
            <Route
              exact
              path={path}
              key={key}
              render={props => {
                const crumbs = routes
                  .filter(({ path }) => props.match.path.includes(path))
                  .map(({ path, ...rest }) => ({
                    path: Object.keys(props.match.params).length
                      ? Object.keys(props.match.params).reduce(
                          (path, param) => path.replace(`:${param}`, props.match.params[param]),
                          path
                        )
                      : path,
                    ...rest,
                  }));
                return (
                  <div className="">
                    <Component {...props} crumbs={crumbs} />
                  </div>
                );
              }}
            />
          ))}
          <Redirect to="/404" />
        </Switch>
      </div>
    </>
  );
}

export default App;
