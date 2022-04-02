import React from 'react'
import CustomRouter from './CustomRouter'
import {CapContext} from "./components/caps-context";
import CapService from "./services/cap-api";
import 'antd/dist/antd.css';
import "./app.scss";

const caps = new CapService()

function App() {
  return (
    <div>
        <CapContext.Provider value={caps}>
            <CustomRouter />
        </CapContext.Provider>
    </div>
  );
}

export default App;