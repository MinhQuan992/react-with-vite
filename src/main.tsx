import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import classes from "./style.module.css"
import './index.css'

// Use this import if there are errors with the import.meta.env
// import 'vite/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// For testing features only
console.log(`Server is running in ${import.meta.env.MODE} environment.`);
console.log(import.meta.env);
console.log(classes);
