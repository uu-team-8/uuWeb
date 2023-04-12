import type { FC } from "react";
import { Switch, Route } from "wouter";

import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";

const App: FC = () => {
  return (
    <>
      <Switch>
        <Route path="/prihlaseni" component={Login} />
        <Route path="/registrace" component={Register} />

        <Route path="/" component={Home} />
      </Switch>
    </>
  )
}

export default App
