import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { baseTheme } from "./themes/base-theme";

function App() {
  return <ThemeProvider theme={baseTheme}>App works</ThemeProvider>;
}

export default App;
