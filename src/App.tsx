import type { FC } from "react";
import { Switch, Route } from "wouter";
import { Global, css } from "@emotion/react";

import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";

const App: FC = () => {
  return (
    <>
      <Global
        styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}
      />
      <Switch>
        <Route path="/prihlaseni" component={Login} />
        <Route path="/registrace" component={Register} />

        <Route path="/" component={Home} />
      </Switch>
    </>
  )
}

export default App
