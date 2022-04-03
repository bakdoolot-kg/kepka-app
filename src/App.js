import React from 'react'
import CustomRouter from './CustomRouter'
import {CapContext} from "./components/caps-context";
import {store} from "./redux";
import CapService from "./services/cap-api";
import 'antd/dist/antd.css';
import "./app.scss";
import {Provider} from "react-redux";

const caps = new CapService()

function App() {
  return (
    <div>
        <Provider store={store}>
        <CapContext.Provider value={caps}>
            <CustomRouter />
        </CapContext.Provider>
        </Provider>
    </div>
  );
}

export default App;