import { Provider } from "react-redux";
import { store } from "redux/store";
import ThemeProvider from "assets/styles/theme";
import { GlobalStyle } from "./assets/styles/global";
import Main from "./pages/main";

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider>
          <Main />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
