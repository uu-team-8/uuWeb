import type { FC } from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import { Switch, Route } from "wouter";
import { Global, ThemeProvider, css } from "@emotion/react";

import { Theme } from "./style-variables";

import LeftPanel, { LeftPanelItem } from "./components/left-panel";
import logo from "./assets/logo.svg";
import dashboardIcon from "./assets/icons/dashboard.svg";
import thermostatIcon from "./assets/icons/thermostat.svg";
import waterDropIcon from "./assets/icons/water-drop.svg";

import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Temperature from "./pages/temperature";
import Humidity from "./pages/humidity";

const App: FC = () => {
  const [leftPanelExpanded, setLeftPanelExpanded] = useState(false);

  return (
    <AppWrapper>
      <ThemeProvider theme={Theme}>
        <Global
          styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Helvetica";
          font-style: normal;
        }
        html,body {
          width: 100%;
          height: 100%;
        }
        `}
        />
        <LeftPanel expanded={leftPanelExpanded}>
          <LeftPanelItem icon={logo} label="uuMeteostation" href="/" />
          <LeftPanelItem icon={dashboardIcon} label="Dashboard" href="/" />
          <LeftPanelItem icon={thermostatIcon} label="Teplota" href="/teplota" />
          <LeftPanelItem icon={waterDropIcon} label="Vlhkost" href="/vlhkost" />
        </LeftPanel>
        <Switch>
          <Route path="/prihlaseni" component={Login} />
          <Route path="/registrace" component={Register} />

          <Route path="/" component={Dashboard} />
          <Route path="/teplota" component={Temperature} />
          <Route path="/vlhkost" component={Humidity} />
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
