import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddPage from "./components/AddPage";
import EditPage from "./components/EditPage";
import ShowPage from "./components/ShowPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/update/:id" element={<EditPage />} />
        <Route path="/product/:id" element={<ShowPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
