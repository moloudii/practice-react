import { useParams, useNavigate, useLocation } from "react-router-dom";

export default function Post() {
  const params = useParams();
  console.log(params);
  const negative = useNavigate();
  const match = useLocation();
  console.log(match);
  return (
    <>
      <button onClick={() => negative(-1)}>back</button>
      <div>post {params.slug}</div>
    </>
  );
}
