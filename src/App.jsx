import { useState } from "react";
import Home from "./Home";
import { store } from "./Redux/store";
import { Provider } from "react-redux";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
