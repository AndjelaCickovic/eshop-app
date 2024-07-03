import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import Layout from "./components/layout/Layout";
import "./locales/i18n";
import "./styles/global.scss";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: routes,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
