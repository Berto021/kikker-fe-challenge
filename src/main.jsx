import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ConfigProvider } from 'antd'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider direction='ltr' theme={{
    token:{
      colorPrimary: "#158285"
    }
  }}>
    <App />
  </ConfigProvider>,
)
