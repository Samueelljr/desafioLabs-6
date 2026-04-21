import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
// import Posts from "../pages/Posts";
// import Comments from "../pages/Comments";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        {/* <Route path="/users/:userId/posts" element={<Posts />} />
        <Route path="/posts/:postId/comments" element={<Comments />} /> */}
      </Routes>
    </BrowserRouter>
  );
}