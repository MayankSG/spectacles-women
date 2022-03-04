import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { Provider } from "react-redux";
import store from "./redux/store/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LandingPage />
      </div>
    </Provider>
  );
}

export default App;
