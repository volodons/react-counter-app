import CounterClass from "./components/CounterClass.jsx";
import CounterFunctional from "./components/CounterFunctional.jsx";
import CounterReactRedux from "./components/CounterReactRedux.jsx";
import "./App.css";

function App() {
  return (
    <>
      <CounterClass />
      <CounterFunctional />
      <CounterReactRedux />
    </>
  );
}

export default App;
