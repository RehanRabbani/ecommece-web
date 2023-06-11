import React from "react";
import logo from "./logo.svg";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import ProductDetail from "./pages/ProductDetail";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ProductDetail />
      </div>
    </QueryClientProvider>
  );
}

export default App;
