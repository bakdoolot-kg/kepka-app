import React from "react";
import CustomRouter from "./CustomRouter";
import Footer from "./components/footer";
import Numbers from './components/cap-in-numbers';

import "./app.scss";

function App() {
  return (
    <div>
      <CustomRouter />
      {/* <Numbers /> */}
      <Footer />
    </div>
  );
}

export default App;