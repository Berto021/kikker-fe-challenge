import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider
    direction="ltr"
    theme={{
      token: {
        colorPrimary: "#3b5998",
        
      },
      components: {
        Table: {
          headerBg: "#158285",
          headerBorderRadius: 30,
          headerSplitColor: "black",
        },
        Pagination: {
          position: "center",
        },
        
      },
    }}
  >
    <App />
  </ConfigProvider>
);
