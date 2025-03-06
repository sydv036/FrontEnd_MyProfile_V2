import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

export default function RouterConfiguration() {
  const router = createBrowserRouter([
    { path: "/login", element: <div>login</div> },
    { path: "/register", element: <div>register</div> },
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <div>Home</div> },
        {
          path: "page2",
          element: <div>Page 2</div>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
