import { createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./scenes/Navbar";
import Dashboard from "./scenes/Dashboard";
import Prediction from "@/scenes/Prediction";


function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Box width = "100%" height = "100%" padding="1rem 2rem 4rem 2rem">
              <Navbar/>
              <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/predictions" element={<Prediction/>} />
              </Routes>
            </Box>
          </CssBaseline>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
