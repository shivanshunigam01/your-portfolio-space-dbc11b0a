import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const heroPreload =
  import.meta.env.VITE_HERO_VIDEO_1?.trim() || "/hero-1.mp4";
const link = document.createElement("link");
link.rel = "preload";
link.as = "video";
link.href = heroPreload;
document.head.appendChild(link);

createRoot(document.getElementById("root")!).render(<App />);
