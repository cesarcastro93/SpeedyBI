import React from 'react';
import { useState } from 'react';
import '../Styles/Card.css'
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';


function Card({ title, image, descrip, URL }) {

  const [show, setShow] = useState(false)
  const modalClose = () => setShow(false)
  const modalOpen = () => setShow(true)


  return (
    <>
      <div className='band'>
        <div className='center'>
          <div className="front-face "  >
            <div className="contents front " >
              <img src={image} alt='' className=' card-img-top ImagenD' height='400' />
            </div>
          </div>
          <div className="back-face" >
            <div className="contents back">
              <p className='card-text'> {descrip} </p>
              <a className='btn btn-outline-primary rounded-3' onClick={modalOpen}> Ver informe</a>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={modalClose} backdrop="static" fullscreen >
        <Modal.Header closeButton >
          <Modal.Title><h1>{title}</h1></Modal.Title>
        </Modal.Header>

        <Modal.Body >
          <div className="embed-responsive embed-responsive-21by9">
            <iframe width='90%' height="780" src={URL}   className="embed-responsive-item " ></iframe>
          </div>
        </Modal.Body>

      </Modal>
    </>

  );
}

export default Card;

