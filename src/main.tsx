import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GlobalProvider } from "./context/GlobalContext.tsx";
import { TodosProvider } from "./context/TodosContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
      <TodosProvider>
        <App />
      </TodosProvider>
    </GlobalProvider>
  </React.StrictMode>,
);
