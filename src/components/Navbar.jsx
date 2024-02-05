import { useState } from 'react';

function Navbar({ onPageChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePageChange = (page) => {
    onPageChange(page);
    setIsMenuOpen(false); // Close the menu after selecting a page
  };

  return (
    <div className={`Navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="logo">Personal</div>
      <div className="menu-icon" onClick={handleToggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="menu">
        <div className="menu-item" onClick={() => handlePageChange('dashboard')}>Records</div>
        <div className="menu-item" onClick={() => handlePageChange('add')}>Add</div>
      </div>
    </div>
  );
}

export default Navbar;
