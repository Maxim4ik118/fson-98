import clsx from "clsx";
import { NavLink } from "react-router-dom";

import css from "../../App.module.css";
import { useSelector } from "react-redux";
import { selectIsSignedIn } from "../../redux/auth/selectors";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Layout = ({ children }) => {
  const isSignedIn = useSelector(selectIsSignedIn);

  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/">
            Home
          </NavLink>
          {isSignedIn ? (
            <>
              <NavLink className={getNavLinkClassName} to="/contacts">
                Contacts
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
            </>
          ) : (
            <>
              <NavLink className={getNavLinkClassName} to="/register">
                Register
              </NavLink>
              <NavLink className={getNavLinkClassName} to="/login">
                Login
              </NavLink>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
