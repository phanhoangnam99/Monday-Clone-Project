import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import BoardCreate from "./pages/BoardCreate";
function App() {
  return (
    <>
      <Routes>
        <Route path="/sign_up_new" element={<SignUp />} />
        <Route path="/create-board" element={<BoardCreate />} />
      </Routes>
    </>
  );
}

export default App;
