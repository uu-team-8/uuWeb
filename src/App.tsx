import type { FC } from "react";
import styled from "@emotion/styled";
import { Switch, Route, useLocation } from "wouter";
import { Global, ThemeProvider, css } from "@emotion/react";

import { Theme } from "./style-variables";

import LeftPanel from "./components/left-panel";
import LeftPanelItem from "./components/left-panel-item";

import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Temperature from "./pages/temperature";
import Humidity from "./pages/humidity";
import Profile from "./pages/profile";

const App: FC = () => {
  const [location] = useLocation();
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
          color: #FFFFFF;
          background-color: #333333;
        }
        `}
        />
        {location != "/prihlaseni" && location != "/registrace" &&
          <LeftPanel>
            <LeftPanelItem
              icon={<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M520 456V216h320v240H520ZM120 616V216h320v400H120Zm400 320V536h320v400H520Zm-400 0V696h320v240H120Zm80-400h160V296H200v240Zm400 320h160V616H600v240Zm0-480h160v-80H600v80ZM200 856h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360 776Z" /></svg>}
              label="Dashboard"
              href="/" />
            <LeftPanelItem
              icon={<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M480 976q-83 0-141.5-58.5T280 776q0-48 21-89.5t59-70.5V296q0-50 35-85t85-35q50 0 85 35t35 85v320q38 29 59 70.5t21 89.5q0 83-58.5 141.5T480 976Zm-40-440h80v-40h-40v-40h40v-80h-40v-40h40v-40q0-17-11.5-28.5T480 256q-17 0-28.5 11.5T440 296v240Z" /></svg>}
              label="Teplota"
              href="/teplota" />
            <LeftPanelItem
              icon={<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M491 856q12-1 20.5-9.5T520 826q0-14-9-22.5t-23-7.5q-41 3-87-22.5T343 681q-2-11-10.5-18t-19.5-7q-14 0-23 10.5t-6 24.5q17 91 80 130t127 35Zm-11 120q-137 0-228.5-94T160 648q0-100 79.5-217.5T480 176q161 137 240.5 254.5T800 648q0 140-91.5 234T480 976Zm0-80q104 0 172-70.5T720 648q0-73-60.5-165T480 282Q361 391 300.5 483T240 648q0 107 68 177.5T480 896Zm0-320Z" /></svg>}
              label="Vlhkost"
              href="/vlhkost" />
          </LeftPanel>
        }
        <Switch>
          <Route path="/prihlaseni" component={Login} />
          <Route path="/registrace" component={Register} />

          <Route path="/" component={Dashboard} />
          <Route path="/teplota" component={Temperature} />
          <Route path="/vlhkost" component={Humidity} />
          <Route path="/profil/:id" component={Profile} />
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
