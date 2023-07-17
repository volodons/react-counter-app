import CounterClass from "./components/CounterClass.jsx";
import CounterFunctional from "./components/CounterFunctional.jsx";
import CounterReactRedux from "./components/CounterReactRedux.jsx";
import { Provider } from "./providers/Provider.jsx";
import store from "./store/store.js";
import "./App.css";

function App() {
  return (
    <>
      <CounterClass />
      <CounterFunctional />
      <Provider value={store}>
        <CounterReactRedux />
      </Provider>
    </>
  );
}

export default App;
