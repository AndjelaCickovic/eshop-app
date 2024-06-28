import PathConstants from "./path-constants";
import Products from "../pages/products/Products";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  { index: true, element: <Products /> },
  { path: PathConstants.Products, element: <Products /> },
  { path: PathConstants.ProductDetails, element: <div /> },
];

export default routes;
