import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./sites/Home";
import NotFound from "./sites/NotFound";
import AddUser from "./sites/AddUser";
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/add_user" element={<AddUser />}></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
