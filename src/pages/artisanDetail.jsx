import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import artisansData from '../datas/datas.json';

const ArtisanDetail = () => {
  const { id } = useParams();
  const artisan = artisansData.find((a) => a.id === id);

  const [contactForm, setContactForm] = useState({
    name: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  if (!artisan) {
    return <p>Artisan non trouvé.</p>;
  }

  return (
    <div>
      <h1>{artisan.name}</h1>
      <p>Note: {artisan.note}</p>
      <p>Spécialité: {artisan.specialty}</p>
      <p>Localisation: {artisan.location}</p>
      <p>A propos: {artisan.about}</p>
      <p>Catégorie: {artisan.category}</p>
      {artisan.website && (
        <p>
          Site Web: <a href={artisan.website}>{artisan.website}</a>
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            name="name"
            value={contactForm.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Objet:
          <input
            type="text"
            name="subject"
            value={contactForm.subject}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={contactForm.message}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ArtisanDetail;
