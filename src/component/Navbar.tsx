import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#556B2F] text-white px-6 py-1">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="italic font-small tracking-widest text-white/80">MagJay'26</h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-[14px]">
          <Link to="/">Home</Link>
          <Link to="/invite">Invite</Link>
          <Link to="/registry">Registry</Link>
          <Link to="/galleries">Gallery</Link>
          <Link to="/vendor">Vendors</Link>
          <Link to="/locationz">Locations</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-[#4c6029] p-4 rounded-lg">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/invite" onClick={() => setIsOpen(false)}>
            Invite
          </Link>
          <Link to="/registry" onClick={() => setIsOpen(false)}>
            Registry
          </Link>
          <Link to="/galleries" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
          <Link to="/vendor" onClick={() => setIsOpen(false)}>
            Vendors
          </Link>
          <Link to="/locationz" onClick={() => setIsOpen(false)}>
            Locations
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;