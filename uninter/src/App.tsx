import React, { useState } from "react";
import "./App.css";
import Main from "./pages/Main/Main";
import Card from "./pages/Card/Card";

function App() {
  const [isMain, setIsMain] = useState(true);

  return (
    <div className="h-screen">
      {isMain ? <Main setIsMain={setIsMain} /> : <Card setIsMain={setIsMain} />}
    </div>
  );
}

export default App;
