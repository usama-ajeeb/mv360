import "./styles/init.scss";
import Main from "./main/Main";
import { store, persistor } from "./app/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}

export default App;
