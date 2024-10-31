import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import PostsPage from "./Pages/PostsPage";

const ProjectRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage />
  },
  {
    path: "/posts",
    element: <PostsPage />
  }
])

export default ProjectRoutes;
