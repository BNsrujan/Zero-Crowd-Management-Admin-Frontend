import { createBrowserRouter, RouterProvider } from "react-router";
import Healthcheck from "@/pages/healthcheck/healthcheck";

export default function APP() {
  const router = createBrowserRouter([
    {
      path: "/monkey",
      element: <h1>hellow</h1>,
    },
    {
      path: "/",
      element: <h1>hello</h1>,
    },
    {
      path: "/healthCheck",
      element: <Healthcheck />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
