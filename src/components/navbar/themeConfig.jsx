// navbar/themeConfig.js

import { Sun, Moon, Droplets, Leaf, Flower, Flame } from "lucide-react";

export const themes = [
  {
    key: "light",
    label: "Light",
    icon: (size) => <Sun size={size} stroke="rgb(249 115 22)" fill="yellow" strokeWidth={0.5} />
  },
  {
    key: "dark",
    label: "Dark",
    icon: (size) => <Moon size={size} fill="rgb(24 24 27)" strokeWidth={0.5}/>
  },
  {
    key: "softBlue",
    label: "Blue",
    icon: (size) => <Droplets size={size} fill="rgb(79 124 255)" strokeWidth={0.5}/>
  },
  {
    key: "mintGreen",
    label: "Mint",
    icon: (size) => <Leaf size={size} fill="rgb(58 191 175)" strokeWidth={0.5}/>
  },
  {
    key: "softLavender",
    label: "Lavender",
    icon: (size) => <Flower size={size} fill="rgb(124 131 253)" strokeWidth={0.5}/>
  },
  {
    key: "Flame",
    label: "Flame",
    icon: (size) => <Flame size={size} fill="rgb(249 115 22)" strokeWidth={0.5}/>
  }
];