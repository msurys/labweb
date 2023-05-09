import { useState } from "react";
import '../styles/AddNew.css'
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const AddNew = (props) => {
  const RealEstateList = props.RealEstateList;
  const setRealEstateList = props.setRealEstateList;
  const [showModal, setShowModal] = useState(false);

  const [newProperty, setNewProperty] = useState({
    id: "",
    city: "",
    address: "",
    bedrooms: "",
    description: "",
    price: ""
  });

  const handleNewProperty = (event) => {
    setNewProperty({...newProperty, [event.target.name]: event.target.value});
  };

  const handleAddNewProperty = (event) => {
    event.preventDefault();
    const lastId = RealEstateList[RealEstateList.length - 1].id;
    const newPropertyWithId = { ...newProperty, id: parseInt(lastId) + 1 };
    setRealEstateList(RealEstateList.concat(newPropertyWithId));
    setNewProperty({
      id: "",
      city: "",
      address: "",
      bedrooms: "",
      description: "",
      price: ""
    });
    setShowModal(true);
  };

  return (
    <section>
      <form onSubmit={handleAddNewProperty}>
        <label htmlFor="city">Miasto:</label>
        <input type="text" id="city" name="city" value={newProperty.city} onChange={handleNewProperty} required />
        <br />
        <label htmlFor="address">Adres:</label>
        <input type="text" id="address" name="address" value={newProperty.address} onChange={handleNewProperty} required />
        <br />
        <label htmlFor="bedrooms">Liczba pokoi:</label>
        <input type="text" id="bedrooms" name="bedrooms" value={newProperty.bedrooms} onChange={handleNewProperty} required />
        <br />
        <label htmlFor="description">Opis:</label>
        <input type="text" id="description" name="description" value={newProperty.description} onChange={handleNewProperty} required />
        <br />
        <label htmlFor="price">Cena:</label>
        <input type="text" id="price" name="price" value={newProperty.price} onChange={handleNewProperty} required />
        <br />
        <label htmlFor="seller">Sprzedawca:</label>
        <input type="text" id="seller" name="seller" value={newProperty.seller} onChange={handleNewProperty} required />
        <br />
        <label htmlFor="phone">Telefon:</label>
        <input type="text" id="phone" name="phone" value={newProperty.phone} onChange={handleNewProperty} required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={newProperty.email} onChange={handleNewProperty} required />
        <br />
        <button type="submit">Dodaj nieruchomość</button>
      </form>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Gratulacje!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Dodałeś nową nieruchomość!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Zamknij
        </Button>
      </Modal.Footer>
    </Modal>
  </section>
  );
};

export default AddNew;