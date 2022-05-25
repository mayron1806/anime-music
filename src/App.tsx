import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import { useAuth } from "./Hooks/useAuth";
import { CreateAccount } from "./pages/create-account";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { PagesProtector } from "./pages/PagesProtector";

function App() {
  const auth = useAuth();

  return(
    <AuthContext.Provider value={auth}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/login" element={
            <PagesProtector condition={!auth.isAuthenticated} redirectTo={"/"}>
              <Login />
            </PagesProtector>
          }
          />
          <Route path="/create-account" element={
            <PagesProtector condition={!auth.isAuthenticated} redirectTo={"/"}>
                <CreateAccount />
            </PagesProtector>
          }
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
export default App;
