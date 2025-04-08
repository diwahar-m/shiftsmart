import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import '@fontsource/poppins'

function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
