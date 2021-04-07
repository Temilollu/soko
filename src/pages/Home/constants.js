import Electronics from "../../components/Electronics/Electronics";
import Masks from "../../components/masks/Masks";


export const sidebarItems = [
  {
    name: "Electronics",
    available: 12,
  },
  {
    name: "Face masks",
    available: 14,
  },
  {
    name: "Nose Masks",
    available: 5,
  },
  {
    name: "Barca jersey",
    available: 4,
  },
  {
    name: "Kids",
    available: 4,
  },
];


export const Items = {
    Electronics: <Electronics />,
    "Face masks": <Masks />,
  };