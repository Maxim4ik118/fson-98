import { useParams } from "react-router-dom";

const CommentPage = () => {
  const { productId } = useParams();
  return <div>CommentPage: {productId}</div>;
};

export default CommentPage;
