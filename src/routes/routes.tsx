import { PathConstants } from "./path-constants";
import Products from "../pages/products/Products";
import { RouteObject } from "react-router-dom";
import { ProductDetail } from "../components";

const routes: RouteObject[] = [
  {
    path: PathConstants.Home,
    element: <Products />,
  },
  {
    path: PathConstants.Products,
    element: <Products />,
  },
  {
    path: PathConstants.ProductDetails,
    element: <ProductDetail />,
  },
];

export default routes;
