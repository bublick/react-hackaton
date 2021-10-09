import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import MainPage from "./components/mainPage/mainPage";
import NotFound from "./components/notFound/notFound";
import User from "./components/user/user";
import Breadcrumbs from "./components/breadcrumbs/breadcrumbs";
const routes = [
  { path: "/", name: "Главная", Component: MainPage },
  { path: "/users", name: "Команда", Component: User },
  { path: "/users/:userId", name: "Член", Component: User },
  { path: "/404", name: "404", Component: NotFound },
];

function App() {
  return (
    <>
      <Header />
      <div className="">
        <Switch>
          {routes.map(({ path, name, Component }, key) => (
            <Route
              exact
              path={path}
              key={key}
              render={(props) => {
                const crumbs = routes
                  .filter(({ path }) => props.match.path.includes(path))
                  .map(({ path, ...rest }) => ({
                    path: Object.keys(props.match.params).length
                      ? Object.keys(props.match.params).reduce(
                          (path, param) =>
                            path.replace(
                              `:${param}`,
                              props.match.params[param]
                            ),
                          path
                        )
                      : path,
                    ...rest,
                  }));
                return (
                  <div className="">
                    <Breadcrumbs crumbs={crumbs} />
                    <Component {...props} />
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
