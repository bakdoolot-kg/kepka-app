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
        <Provider value={caps}>
            <CustomRouter />
        </Provider>
    </div>
  );
}

export default App;