import { BrowserRouter, Route, Routes } from "react-router-dom";
import RedRoomLanding from "./pages/RedRoomLanding";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RedRoomLanding />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
