import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';

const Header = ({ onSearch, searchTerm, setSearchTerm }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm.trim());
  };


  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="Logo" style={{ maxWidth: '100px' }} />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/batiment">Bâtiment</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/fabrication">Fabrication</Link>
          </li>
          <li>
            <Link to="/alimentation">Alimentation</Link>
          </li>
        </ul>
      </nav>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>
    </header>
  );
};

export default Header;
