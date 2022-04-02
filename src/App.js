import React from "react";
import CustomRouter from "./CustomRouter";
import Footer from "./components/footer";
import Numbers from './components/cap-in-numbers';
import React from 'react'
import CustomRouter from './CustomRouter'
import {Provider} from "./components/caps-context";
import CapService from "./services/cap-api";
import 'antd/dist/antd.css';
import "./app.scss";

const caps = new CapService()

function App() {
  return (
    <div>
      <CustomRouter />
      {/* <Numbers /> */}
      <Footer />
        <Provider value={caps}>
            <CustomRouter />
        </Provider>
    </div>
  );
}

export default App;