import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm';

function ModalForm({ showModal, setShowModal }) {
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const [formType, setFormType] = React.useState(null)

  function handleShow(type, breakpoint) {
    setFormType(type)
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
        <Button onClick={() => handleShow('sign-in')}>
          Sign-In
        </Button>
        <Button onClick={() => handleShow('sign-up')} className='ms-4'>
          Sign-Up
        </Button>


      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{formType === 'sign-in' ? 'Sign-In' : 'Sign-Up'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formType === 'sign-in' ? <SignInForm /> : <SignUpForm />}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalForm;