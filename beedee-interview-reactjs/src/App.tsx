import { QuestionsPage, WelcomePage } from "./pages";

import "./assets/styles/App.css";
import "./assets/fonts/stylesheet.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/test/:username' element={<QuestionsPage />} />
      <Route path="*" element={<WelcomePage />} />
    </Routes>
  );
}

export default App;
