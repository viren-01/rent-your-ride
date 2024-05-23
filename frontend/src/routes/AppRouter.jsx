import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Vehicle from "../pages/Vehicles";
export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/contact" Component={Contact}/>
                <Route path="/vehicles" Component={Vehicle}/>

            </Routes>
        </Router>
    )
}