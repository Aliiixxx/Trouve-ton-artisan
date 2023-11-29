import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ artisans }) => {
  const topArtisans = artisans.filter((artisan) => artisan.top === true).slice(0, 3);

  return (
    <div>
      <h1>Liste des artisans</h1>
      <section>
        <h2>Comment trouver mon artisan ?</h2>
        <ol>
          <li>Choisir la catégorie d’artisanat dans le menu.</li>
          <li>Choisir un artisan.</li>
          <li>Le contacter via le formulaire de contact.</li>
          <li>Une réponse sera apportée sous 48h.</li>
        </ol>
      </section>

      <h2>Les trois artisans du mois</h2>
      {topArtisans.length > 0 ? (
        <ul>
          {topArtisans.map((artisan) => (
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
        <p>Aucun artisan du mois trouvé.</p>
      )}
    </div>
  );
};

export default Home;
