import type { FC } from "react";
import styled from "@emotion/styled";
import { Switch, Route } from "wouter";
import { Global, ThemeProvider, css } from "@emotion/react";

import { Theme } from "./style-variables";

import LeftPanel from "./components/left-panel";

import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";

const App: FC = () => {
  return (
    <AppWrapper>
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
        <LeftPanel />
        <Switch>
          <Route path="/prihlaseni" component={Login} />
          <Route path="/registrace" component={Register} />

          <Route path="/" component={Dashboard} />
        </Switch>
      </ThemeProvider>
    </AppWrapper>
  )
}

const AppWrapper = styled("div")`
  display: flex;
  width: 100%;
  height: 100%;
`

export default App
