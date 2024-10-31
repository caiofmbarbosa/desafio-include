import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "./Pages/LayoutPage";
import About from "./Components/About";
import Posts from "./Components/Posts";

const ProjectRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: "/posts",
        element: <Posts />
      }
    ]
  }
])

export default ProjectRoutes;
