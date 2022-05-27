import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthContext } from "./Context/AuthContext";
import { useAuth } from "./Hooks/useAuth";
import { CreateAccount } from "./pages/create-account";

import { Home } from "./pages/home";
import { Login } from "./pages/login";

function App() {
  const auth = useAuth();

  return(
    <AuthContext.Provider value={auth}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
export default App;
