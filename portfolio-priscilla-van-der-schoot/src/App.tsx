import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/HomePage";
import Blog from "./components/BlogPage";
import Post from "./components/Post"
import About from "./components/AboutPage";
import PageNotFound from './components/PageNotFound';

const App = () => {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "blog",
                element: <Blog/>
            },
            {
              path: "post/:id",
              element: <Post/>
            },
            {
                path: "about",
                element: <About/>
            }
        ]
    },
    {
      path: "*",
      element: <PageNotFound/>
  }
]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}


export default App;

