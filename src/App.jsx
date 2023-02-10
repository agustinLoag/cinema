import { Provider } from "react-redux";
import generateStore from "./redux/store";
function App() {
  let store = generateStore();

  return (
    <Provider store={store}>
      <div>Hola desde redux</div>
    </Provider>
  );
}

export default App;
