import { createRoot } from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    
      <App />
      <Toaster position="top-right"/>
    
  </BrowserRouter>,
);
