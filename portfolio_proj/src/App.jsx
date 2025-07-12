import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home"; // Assuming you move Home to its own file
import { NotFound } from "./pages/NotFound"; // Same for NotFound

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
