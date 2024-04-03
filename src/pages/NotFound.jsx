import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Page you visited doesn&apos;t exist.</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
