import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <ul>
      {Array.isArray(products) &&
        products.map((product) => {
          return (
            <li key={product.id}>
              <img width={250} src={product.thumbnail} alt={product.title} />
              <h2>Title: {product.title}</h2>
              <h3>
                Brand: <b> {product.brand}</b>
              </h3>
              <p>
                Description: <b>{product.description}</b>
              </p>
              <h4>
                Price: <b>{product.price}</b>
              </h4>
              <p>
                Rating: <b>{product.rating}</b>
              </p>
              {/* /products/4 */}
              <Link to={`/products/${product.id}`}>See the details</Link>
            </li>
          );
        })}
    </ul>
  );
};

export default ProductList;
