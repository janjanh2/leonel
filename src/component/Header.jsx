import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide">
          <span className="text-4xl font-bold text-cyan-500"> ZECKAH'S</span> | CLOTHING SHOP
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-8 text-lg font-medium">
            <li>
              <NavLink
                to="/"
                className="hover:text-green-500 hover:scale-110 hover:underline transition-all font-bold text-cyan-500"
                activeClassName="text-blue-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Products"
                className="hover:text-green-500 hover:scale-110 hover:underline transition-all font-bold text-cyan-500"
                activeClassName="text-blue-300"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className="hover:text-green-500 hover:scale-110 hover:underline transition-all font-bold text-cyan-500"
                activeClassName="text-blue-300"
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
