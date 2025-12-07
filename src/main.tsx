import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
    <h1>Static Site Deployed via GitHub Pages</h1>
    <p>Your actual site is in the <code>/site</code> folder and deploys automatically.</p>
    <p>Visit <a href="https://joshkatinger.com">joshkatinger.com</a> to see the live site.</p>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
