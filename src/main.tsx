import { render } from "preact";
import { Provider } from "react-redux";
import { App } from "./app.tsx";
import "./index.css";
import { store } from "./redux/store.ts";

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("app")!
);
