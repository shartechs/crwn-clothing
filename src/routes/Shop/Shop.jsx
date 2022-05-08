import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";
import "./Shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
};

export default Shop;
