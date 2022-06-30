import BlogPost from "./pages/blog";
import HomePage from "./pages/homePage";
import Post from "./pages/post/post";
import { useRoutes } from "hookrouter";
import NotFoundPage from "./pages/NotFoundPage";

const routes = {
  "/": () => <HomePage />,
  "/blog": () => <BlogPost />,
  "/post/:id": ({ id }) => <Post id={id} />,
};
export default function AppLayout() {
  const match = useRoutes(routes);
  return match || <NotFoundPage />;
}
