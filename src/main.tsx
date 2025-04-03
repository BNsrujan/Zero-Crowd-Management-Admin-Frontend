import { createBrowserRouter, RouterProvider } from "react-router";

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/log",
    element: <App />,
  },
  {
    path: "/monkey",
    element: <h1>react</h1>,
  },
  {
    path: "/",
    element: <App />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
