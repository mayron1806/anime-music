import { useState, createContext } from "react";
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
/*
import { Teste } from "./teste/tes";


const Context = createContext<number>(0);


const App = ()=>{
  const [count, setCount] = useState<number>(0);
  const [counts, setCounts] = useState<number>(0);
  const [value, setValue] = useState<string>("");
  return (
    <Context.Provider value={counts}>
      <Teste count={count} />
      <button onClick={()=>{setCounts(c => c + 1)}}>Increment</button>
      <input type="text" value={value} onChange={e => setValue(e.target.value) } />
    </Context.Provider>
  )
}*/
export default App;
