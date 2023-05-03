import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./sites/Home";
import NotFound from "./sites/NotFound";
import AddUser from "./sites/AddUser";
import Gateways from "./sites/Gateways";
import LoginPage from "./sites/Login";
import RegisterPage from "./sites/Register";
import Account from "./sites/Account";
import Documentation from "./sites/Docs";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add_user" element={<AddUser />} />
        <Route path="/gateways" element={<Gateways />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
