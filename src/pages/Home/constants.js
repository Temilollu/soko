import Electronics from "../../components/Electronics/Electronics";
import Masks from "../../components/masks/Masks";
import MenAcessories from "../../components/Men acccessories/MenAcessories";

export const sidebarItems = [
  {
    name: "Bags",
    available: 3,
  },
  {
    name: "Sneakers",
    available: 2,
  },
  {
    name: "Mens Accessories",
    available: 3,
  },

];

export const Items = {
  Bags: <Electronics />,
  "Sneakers": <Masks />,
  "Mens Accessories": <MenAcessories />,
};

export const formatNumber = (num) => {
  return Intl.NumberFormat().format(num);
};
