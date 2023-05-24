import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Modal, Button } from 'react-bootstrap';
import '../styles/Details.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Details = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [showModalGood, setShowModalGood] = useState(false);
  const [showModalBad, setShowModalBad] = useState(false);
  const location = useLocation();
  const property = location.state;
  const messageInputRef = useRef(null);

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
      setShowModalBad(true);
    } else {
      setShowModalGood(true);
    }
  };

  useEffect(() => {
    messageInputRef.current.focus();
  }, []);

  return (
    <div className="details-container">
      <h2>{property.city}</h2>
      <p>
        <span>Adres:</span> {property.address}
      </p>
      <p>
        <span>Liczba pokoi:</span> {property.bedrooms}
      </p>
      <p>
        <span>Opis:</span> {property.description}
      </p>
      <p>
        <span>Cena:</span> {property.price} zł
      </p>
      <p>
        <span>Sprzedawca:</span> {property.seller}
      </p>
      <p>
        <span>Telefon:</span> {property.phone}
      </p>
      <p>
        <span>Email:</span> {property.email}
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Twój adres e-mail:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Twoja wiadomość do sprzedawcy:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            ref={messageInputRef}
            required
          />
        </div>
        <button type="submit">Wyślij</button>
      </form>
      <Modal show={showModalBad} onHide={() => setShowModalBad(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Niepowodzenie!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Spróbuj ponownie później!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalBad(false)}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showModalGood} onHide={() => setShowModalGood(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Gratulacje!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Wszystko zostało wykonane poprawnie!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalGood(false)}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  );
};

export default Details;
