import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  { name: "Donation", path: "/donation" },
  {
    name: "Statistics",
    path: "/statistics",
  },
];

const NavBar = () => {
  // get current location
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 w-[100vw] bg-white bg-opacity-90 ">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink to={link.path}>{link.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="navbar-brand flex items-center gap-6">
            <img src="/logo.png" alt="logo" className="image-full h-12 w-12" />
            <div>
              <h1 className="text-3xl font-bold text-primary">Donation</h1>
              <p className="text-sm font-semibold tracking-[9px]">Campaign</p>
            </div>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={`font-semibold ${
                    link.path === location.pathname
                      ? "text-primary border-b-2 border-primary"
                      : "text-base text-gray-800"
                  }`}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
