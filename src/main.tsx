import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <p style={{ padding: 40, color: "#94A3B8" }}>
      Run <code>npm run storybook</code> to view the component library.
    </p>
  </StrictMode>,
);
