import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/character/:id" element={<Detail />} />
        <Route path="/Marvel-Wikipedia" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
