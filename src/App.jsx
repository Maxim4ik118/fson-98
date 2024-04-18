import { Suspense, lazy, useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";

// import MailboxPage from "./pages/MailboxPage";
// import ProductsPage from "./pages/ProductsPage";
// import SearchPage from "./pages/SearchPage";
// import HomePage from "./pages/HomePage";
// import NotFound from "./pages/NotFound";
// import ProductDetailsPage from "./pages/ProductDetailsPage";
import Loader from "./components/Loader/Loader";

const MailboxPage = lazy(() => import("./pages/MailboxPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));

import css from "./App.module.css";
/*
 Робота з маршрутизацією:
  1. Навчитися змінювати URL-адресу браузера за допогобо 
    компонента Link | NavLink.
  2. Підготувати шаблони компонентів(сторінок) та рендерити
    їх в залежності від шаблону адреси(pathname) в браузері (Route).


  Компонети Link | NavLink - ми використовуємо для 
    внутрішньої навігації всередині веб-сторінки.
  Тег <a> - ми використовуємо для посиланнь на зовніші 
    ресурси(ютубе, інста, тг, гугл посилання і т.п.).
    -- target="_blank" rel="noopener noreferrer" --
*/

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

function App() {

  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/">
            Home
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/mailbox">
            MailBox
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/products">
            Products
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/search">
            Search
          </NavLink>
        </nav>
      </header>
      {/* URL -> localhost:5123/products/4 */}
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mailbox" element={<MailboxPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route
              path="/products/:productId/*"
              element={<ProductDetailsPage />}
            />
            <Route path="/search" element={<SearchPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
