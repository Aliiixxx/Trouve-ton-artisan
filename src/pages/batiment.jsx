import React from 'react';
import { Link } from 'react-router-dom';

const Batiment = ({ artisans, searchResults }) => {
  const displayArtisans = searchResults && searchResults.length > 0 ? searchResults : artisans;

  const batimentArtisans = displayArtisans.filter((artisan) => artisan.category === 'Bâtiment');

  return (
    <div>
      <h1>Artisans Bâtiment</h1>
      {batimentArtisans.length > 0 ? (
        <ul>
          {batimentArtisans.map((artisan) => (
            <li key={artisan.id}>
              <Link to={`/artisan/${artisan.id}`}>
                <strong>{artisan.name}</strong> - Note: {artisan.note} <br />
                Spécialité: {artisan.specialty} <br />
                Localisation: {artisan.location}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun artisan Bâtiment trouvé.</p>
      )}
    </div>
  );
};

export default Batiment;
