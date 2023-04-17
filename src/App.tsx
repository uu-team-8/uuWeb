import type { FC } from "react";
import { Switch, Route } from "wouter";
import { Global, ThemeProvider, css } from "@emotion/react";

import { Theme } from "./style-variables";

import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";

const App: FC = () => {
  return (
    <ThemeProvider theme={Theme}>
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
    </ThemeProvider>
  )
}

export default App
