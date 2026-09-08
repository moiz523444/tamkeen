import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white/70 backdrop-blur-lg border-b border-gray-200/50 px-6 lg:px-12 py-4 flex items-center justify-between z-50 sticky top-0 transition-all shadow-sm"
    >
      {/* Left: Logo */}
      <Link 
        to="/"
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img src="/logo.png" alt="Tamkeen Securities Logo" className="h-10 w-auto object-contain" />
      </Link>

      {/* Middle: Toggle Pill */}
      <div className="hidden md:flex bg-gray-100/80 p-1.5 rounded-full items-center border border-gray-200/50">
        <NavLink to="/" className={({isActive}) => isActive && window.location.pathname === '/' ? "bg-white text-brand-blue text-xs font-bold px-5 py-2 rounded-full shadow-sm" : "text-gray-500 text-xs font-semibold px-5 py-2 rounded-full hover:text-brand-dark transition-colors"}>PSX</NavLink>
        <NavLink to="/pmex" className={({isActive}) => isActive ? "bg-white text-brand-blue text-xs font-bold px-5 py-2 rounded-full shadow-sm" : "text-gray-500 text-xs font-semibold px-5 py-2 rounded-full hover:text-brand-dark transition-colors"}>PMEX</NavLink>
        <NavLink to="/advisory" className={({isActive}) => isActive ? "bg-white text-brand-blue text-xs font-bold px-5 py-2 rounded-full shadow-sm" : "text-gray-500 text-xs font-semibold px-5 py-2 rounded-full hover:text-brand-dark transition-colors"}>Advisory</NavLink>
      </div>

      {/* Right: Links & Buttons */}
      <div className="hidden lg:flex items-center gap-8">
        <div className="flex gap-5 text-sm font-semibold text-gray-600 items-center">
          <NavLink to="/" className={({isActive}) => isActive ? "text-brand-dark bg-gray-100/80 px-3 py-1.5 rounded-md border border-gray-200/60 shadow-sm transition-colors" : "hover:text-brand-blue transition-colors px-3 py-1.5"}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-brand-dark bg-gray-100/80 px-3 py-1.5 rounded-md border border-gray-200/60 shadow-sm transition-colors" : "hover:text-brand-blue transition-colors px-3 py-1.5"}>About Us</NavLink>
          <NavLink to="/downloads" className={({isActive}) => isActive ? "text-brand-dark bg-gray-100/80 px-3 py-1.5 rounded-md border border-gray-200/60 shadow-sm transition-colors" : "hover:text-brand-blue transition-colors px-3 py-1.5"}>Downloads</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "text-brand-dark bg-gray-100/80 px-3 py-1.5 rounded-md border border-gray-200/60 shadow-sm transition-colors" : "hover:text-brand-blue transition-colors px-3 py-1.5"}>Contact</NavLink>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm font-semibold text-white bg-brand-blue px-5 py-2.5 rounded-lg hover:bg-blue-700 hover:shadow-md hover:shadow-brand-blue/30 transition-all">Open Account</button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

