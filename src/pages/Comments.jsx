import { useParams } from "react-router-dom";
import { api } from "../api/client";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

export default function Comments() {
  const { postId } = useParams();

  const { data: comments, loading, error } = useFetch(
    () => api.get(`/comments?postId=${postId}`),
    [postId]
  );

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="list">
      <h1>Comentários</h1>
      {comments.map(comment => (
        <div key={comment.id} className="card">
          <strong>{comment.email}</strong>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}