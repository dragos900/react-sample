import React from "react";
import "./App.css";
import { Notes } from "./container/notes";

const App: React.FC = () => {
  return (
    <div className="App">
      <Notes />
    </div>
  );
};

export default App;
