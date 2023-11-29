import React from 'react';
import { Link } from 'react-router-dom';

const Fabrication = ({ artisans, searchResults }) => {
  const displayArtisans = searchResults && searchResults.length > 0 ? searchResults : artisans;

  const fabricationArtisans = displayArtisans.filter((artisan) => artisan.category === 'Fabrication');

  return (
    <div>
      <h1>Artisans Fabrication</h1>
      {fabricationArtisans.length > 0 ? (
        <ul>
          {fabricationArtisans.map((artisan) => (
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
        <p>Aucun artisan Fabrication trouvé.</p>
      )}
    </div>
  );
};

export default Fabrication;
