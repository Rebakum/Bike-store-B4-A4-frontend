import { render } from "preact";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./redux/store.ts";
import MainLayouts from "./components/layouts/mainLayout/mainLayouts.tsx";

render(
  <Provider store={store}>
    <MainLayouts />
  </Provider>,

  document.getElementById("app")!
);
