import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { HERO_VIDEO_PRELOAD } from "./data/heroVideos";
import "./index.css";

const heroPreload = HERO_VIDEO_PRELOAD;
const link = document.createElement("link");
link.rel = "preload";
link.as = "video";
link.href = heroPreload;
document.head.appendChild(link);

createRoot(document.getElementById("root")!).render(<App />);
