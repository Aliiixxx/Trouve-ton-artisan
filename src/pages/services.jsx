import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ artisans, searchResults }) => {
  const displayArtisans = searchResults && searchResults.length > 0 ? searchResults : artisans;

  const servicesArtisans = displayArtisans.filter((artisan) => artisan.category === 'Services');

  return (
    <div>
      <h1>Artisans Services</h1>
      {servicesArtisans.length > 0 ? (
        <ul>
          {servicesArtisans.map((artisan) => (
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
        <p>Aucun artisan Services trouvé.</p>
      )}
    </div>
  );
};

export default Services;
