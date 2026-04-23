import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api/client";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

export default function Posts() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const { data: posts, loading, error } = useFetch(
    () => api.get(`/posts?userId=${userId}`),
    [userId]
  );

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="list">
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id} className="card">
          <p>{post.title}</p>
          <button onClick={() => navigate(`/posts/${post.id}/comments`)}>
            Ver comentários
          </button>
        </div>
      ))}
    </div>
  );
}