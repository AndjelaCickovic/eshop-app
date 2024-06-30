import PathConstants from "./path-constants";
import Products from "../pages/products/Products";
import { RouteObject } from "react-router-dom";
import ProductDetail from "../components/product-detail/ProductDetail";
import ProductsList from "../components/products-list/ProductsList";

const productRoutes = [
  { index: true, element: <ProductsList /> },
  { path: ":productId", element: <ProductDetail /> },
];

const routes: RouteObject[] = [
  {
    path: PathConstants.Home,
    element: <Products />,
    children: productRoutes,
  },
  {
    path: PathConstants.Products,
    element: <Products />,
    children: productRoutes,
  },
];

export default routes;
