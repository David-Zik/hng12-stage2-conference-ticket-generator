import { useState } from "react";
import "./index.css";
import {Routes, Route} from 'react-router-dom';
import FirstPage from "./FirstPage"; // import first page
import SecondPage from "./SecondPage"; // import second page
import ThirdPage from "./ThirdPage"; // import third page

function App() {
  return (
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
      </Routes>
  );
}

export default App;

// function DropdownInput() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState("");
// }
