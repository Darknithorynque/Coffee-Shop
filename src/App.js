import Log from "./log";
import { Route, Router, Routes } from "react-router-dom";
import Menu from "./menu";

function App() {
  return (
    <>
      <Routes>
        <Route exac path="/" element={<Log />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
