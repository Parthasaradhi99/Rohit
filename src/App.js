import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./componets/SignUp";
import Login from "./componets/Login";

function App() {
  return (
    <>
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
