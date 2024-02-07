import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ColorList from "./ColorList";
import ColorDisplay from "./ColorDisplay";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/colors/:color" element={<ColorDisplay />} />
          <Route exact path="/colors" element={<ColorList />} />
          <Route path="/*" element={<Navigate to="/colors" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
