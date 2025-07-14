import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SignUpForm from './SignUpForm';
import React from 'react'


function ModalForm({ showModal, setShowModal }) {
  const [fullscreen, setFullscreen] = React.useState(true);


  return (
    <>
      <Modal showModal={showModal} fullscreen={fullscreen} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <SignUpForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalForm;