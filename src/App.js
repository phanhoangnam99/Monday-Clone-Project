import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign_up_new" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
