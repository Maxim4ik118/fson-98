import { Link, useLocation } from "react-router-dom";

const ProductList = ({ products }) => {
  const location = useLocation();

  return (
    <ul>
      {location.pathname === "/search" && <h2>Search results</h2>}
      {location.pathname === "/products" && <h2>Products</h2>}
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
              <Link state={location} to={`/products/${product.id}`}>See the details</Link>
            </li>
          );
        })}
    </ul>
  );
};

export default ProductList;
