import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MenuForm from "./components/menu/Menu";
import CategoryPage from "./pages/CategoryPage";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";
import UserPage from "./pages/UserPage";

const routes = [
  {
    path: "/",
    exact: true,
    header: () => <></>,
    main: () => <LoginPage />,
  },
  {
    path: "/user",
    exact: true,
    header: () => <MenuForm />,
    main: () => <UserPage />,
  },
  {
    path: "/post",
    exact: true,
    header: () => <MenuForm />,
    main: () => <PostPage />,
  },
  {
    path: "/category",
    exact: true,
    header: () => <MenuForm />,
    main: () => <CategoryPage />,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.header />}
          />
        ))}
      </Switch>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
