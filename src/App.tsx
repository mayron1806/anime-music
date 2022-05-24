import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateAccount } from "./pages/create-account";

import { Home } from "./pages/home";
import { Login } from "./pages/login";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/create-account" element={<CreateAccount />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
