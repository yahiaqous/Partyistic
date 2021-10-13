/** @format */

import axios from 'axios';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import useResourcetrip from '../../hook/UseServicesTrips';
import PriceFilter from '../../components/filtering/PriceFilter';
import SearchButton from '../../components/filtering/SearchButton';

export default function BookATrip() {
  const originalData = useResourcetrip().tripresources;
  const [renderedData, setRenderedData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await axios.get(
      'https://partyistic.herokuapp.com/api/v1/partyistic/trips/'
    );
    setRenderedData(data.data);
  };

  const [price, setPrice] = useState('');
  const getPrice = (event) => {
    setPrice(event.target.value);
  };

  function filtering() {
    let lister = [];
    originalData.map((item) => {
      if (item.price <= price || price === '') {
        lister.push(item);
      }
    });
    setRenderedData(lister);
  }

  const [showModal, setShowModal] = useState(false);
  const [modalData, setmodalData] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = (item) => {
    setmodalData(item);
    setShowModal(true);
  };

  return (
    <>
      <h1
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: '40px',
          color: '#fff',
          marginTop: '5%',
          textAlign: 'center',
        }}>
        Book a Trip
      </h1>
      <div className='row row-cols-7'>
        <PriceFilter getPrice={getPrice} />

        <SearchButton filtering={filtering} />
      </div>

      <div className='row row-cols-6'>
        {renderedData &&
          renderedData.map((item) => (
            <div className='col'>
              <Card
                style={{ height: '20rem', marginTop: '3%' }}
                onClick={() => {
                  handleShow(item);
                }}>
                <Card.Img
                  style={{ height: '100%' }}
                  variant='top'
                  src={item.images.images[0]}
                />
              </Card>
            </div>
          ))}
      </div>

      <Modal size='lg' show={showModal} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '27px',
            }}>
            {modalData.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            fontFamily: "'Open Sans Condensed', sans-serif",
            fontSize: '25px',
          }}>
          <Card style={{ width: '100%' }}>
            <Card.Body>
              {modalData.description}
              {modalData.images && (
                <Carousel fade style={{ borderRadius: '1%', width: '100%' }}>
                  {modalData.images.images &&
                    modalData.images.images.map((item) => {
                      return (
                        item && (
                          <Carousel.Item interval={3000}>
                            <img
                              style={{ width: '100%' }}
                              src={item}
                              alt={item}
                            />
                          </Carousel.Item>
                        )
                      );
                    })}
                </Carousel>
              )}

              <Card.Text>Price: {modalData.price}</Card.Text>
              <Card.Text>City: {modalData.city}</Card.Text>
              <Card.Text>Reviews:</Card.Text>
              {modalData.reviews &&
                modalData.reviews.reviews.map((review) => (
                  <Card.Text>{review}</Card.Text>
                ))}
            </Card.Body>
          </Card>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
