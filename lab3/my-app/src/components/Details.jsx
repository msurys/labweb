import { useState } from 'react';
import '../styles/Details.css';

const Details = ({ property }) => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const success = Math.random() < 0.5;
    if (success) {
        <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Niepowodzenie!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Spróbuj ponownie później!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    } else {
        <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Gratulacje!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Wszystko zostało wykonane poprawnie!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    }
  };

  return (
    <div className="details-container">
        <h2>{property.city}</h2>
        <p><span>Adres:</span> {property.address}</p>
        <p><span>Liczba pokoi:</span> {property.bedrooms}</p>
        <p><span>Opis:</span> {property.description}</p>
        <p><span>Cena:</span> {property.price} zł</p>
        <p><span>Sprzedawca:</span> {property.seller}</p>
        <p><span>Telefon:</span> {property.phone}</p>
        <p><span>Email:</span> {property.email}</p>

      <h3>Kontakt z ogłoszeniodawcą</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Twój adres e-mail:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Twoja wiadomość:</label>
          <textarea id="message" value={message} onChange={handleMessageChange} required />
        </div>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
};

export default Details;
