import React from "react";
import "./index.css"
import App from "./App"
import { createRoot } from 'react-dom/client';

const app = document.getElementById('root');

// create a root
const root = createRoot(app);

//render app to root
root.render(<App />);