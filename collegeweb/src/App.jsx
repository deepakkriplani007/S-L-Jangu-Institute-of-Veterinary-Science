import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Payfee from "./pages/Payfee";
import Transaction from "./pages/Transaction";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Forgot from "./pages/Forgot";
import { useEffect, useState } from "react";
import Admin from "./pages/Admin";
function App() {
  // const host = import.meta.env.VITE_REACT_APP_HOST;
  // const role = "admin";
  const [role, setRole] = useState("");
  const [token, setToken] = useState();
  useEffect(() => {
    const storedString = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    if (storedString) {
      setToken(storedString);
    }
    if (storedRole) {
      setRole(storedRole);
    }
    console.log(storedRole);
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              token ? (
                role === "user" ? (
                  <Home setToken={setToken} />
                ) : (
                  <Admin />
                )
              ) : (
                <Home setToken={setToken} />
              )
            }
          />
          <Route
            path="/login"
            element={<Login setToken={setToken} setRole={setRole} />}
          />
          <Route
            path="/signup"
            element={
              token && role === "admin" ? (
                <Signup />
              ) : token ? (
                <Home setToken={setToken} />
              ) : (
                <Login setToken={setToken} setRole={setRole} />
              )
            }
          />
          <Route path="/pay" element={<Payfee />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/profile"
            element={
              token ? (
                <Profile />
              ) : (
                <Login setToken={setToken} setRole={setRole} />
              )
            }
          />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
