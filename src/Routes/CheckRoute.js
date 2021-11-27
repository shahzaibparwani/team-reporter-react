import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
const CheckRoute = () => {

    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />

            </Routes>

        </BrowserRouter>
    )
}

export default CheckRoute;