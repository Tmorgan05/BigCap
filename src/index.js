// import React from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './components/App.js'

// // place css in the src/style directory, and import them like this:
// import './style/index.css'

// const root = document.getElementById('root')
// const app = createRoot(root)
// app.render(<App />)

import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App"
import "./style/index.css";
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
      <App />
  </Router>
);