import { Link, useLocation } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 p-4 mb-4"> {/* Adjust margin-bottom here */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">
          Portfolio Priscilla Van der Schoot
        </div>
        <div className="hidden md:block">
          <Link to="/" className={`text-white px-3 py-2 rounded ${location.pathname === '/' ? 'bg-gray-700' : ''}`}>
            Home
          </Link>
          <Link to="/blog" className={`text-white px-3 py-2 rounded ${location.pathname === '/blog' ? 'bg-gray-700' : ''}`}>
            Blog
          </Link>
          <Link to="/about" className={`text-white px-3 py-2 rounded ${location.pathname === '/about' ? 'bg-gray-700' : ''}`}>
            About
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
