import React from "react";
import ReactDOM from "react-dom";
import "../src/style.scss";
import App from "./App";
import { Provider } from "react-redux";
import rootReducer from "../src/Reducer";
import screenResize from "../src/Actions";
import { createStore } from "redux";

const store = createStore(rootReducer);

window.addEventListener("resize", () => {
  store.dispatch(
    screenResize(window.innerWidth, window.innerHeight, window.innerWidth < 720)
  );
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
