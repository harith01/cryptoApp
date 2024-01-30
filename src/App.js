import React from "react";
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Cryptos from "./components/cryptocurrencies/Cryptos";
import Exchanges from "./components/exchanges/Exchanges";
import News from "./components/news/News";
import { Box } from "@mui/material";


function App() {
  return (
    <div className="app">
      <Box >
        
          <Navbar />
        
      </Box>
      <Box>
       
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cryptos" element={<Cryptos />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/news" element={<News />} />
          </Routes>
        
      </Box>
    </div>
  );
}

export default App;