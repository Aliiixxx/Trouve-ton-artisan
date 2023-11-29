import React from 'react';
import { Link } from 'react-router-dom';

const Alimentation = ({ artisans, searchResults }) => {
  const displayArtisans = searchResults && searchResults.length > 0 ? searchResults : artisans;

  const alimentationArtisans = displayArtisans.filter(
    (artisan) => artisan.category === 'Alimentation'
  );

  return (
    <div>
      <h1>Artisans Alimentation</h1>
      {alimentationArtisans.length > 0 ? (
        <ul>
          {alimentationArtisans.map((artisan) => (
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
        <p>Aucun artisan Alimentation trouvé.</p>
      )}
    </div>
  );
};

export default Alimentation;
