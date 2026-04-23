export default function ErrorMessage({ message }) {
  return <p className="error" style={{ color: "red" }}>{message}</p>;
}