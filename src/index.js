import React from "react";
import ReactDOM from "react-dom/client";
import App from "./composants/App";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import Reducer from "./redux/reducer";
import './style.css'

export default function Affichage() {
    const store = legacy_createStore(Reducer)
  return (
    <Provider store={store}>
        <App />
    </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Affichage/>)