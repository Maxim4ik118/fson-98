import { useParams } from "react-router-dom";

const CommentsPage = () => {
  const { productId } = useParams();
  return <div>CommentsPage: {productId}</div>;
};

export default CommentsPage;
