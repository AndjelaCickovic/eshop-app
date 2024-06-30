import "./locales/i18n";
import "./App.css";
import "./styles/global.scss";
import Layout from "./components/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      //TODO: Do we need error page?
      // errorElement: <Page404 />,
      children: routes,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
