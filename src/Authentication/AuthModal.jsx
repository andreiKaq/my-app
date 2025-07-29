import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AuthForm from './AuthForm';
import { useSelector, useDispatch } from 'react-redux';
import { setShowAuthForm, setToastMessage, setErrorMessage } from '../services/state/store';
import { UserContext } from '../providers/UserProvider';

function AuthModal() {
    const {actions: {setAuthData}} = React.useContext(UserContext)

    const formRef = React.useRef()
    const dispatch = useDispatch()
    const show = useSelector((state) => state.showAuthForm)
    const handleClick = () => formRef.current.requestSubmit()
    const handleClose = () => dispatch(setShowAuthForm(false))

    const handleLoginSuccess = userData => {
        
        setAuthData(prev => ({ ...prev, ...userData }))
        dispatch(setToastMessage('Вход выполнен успешно'))
        dispatch(setErrorMessage(null))
        dispatch(setShowAuthForm(false))
    }

    const handleLoginError = errorText => {
        dispatch(setErrorMessage(errorText))
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AuthForm formRef={formRef} onSuccess={handleLoginSuccess} onError={handleLoginError} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClick}>
                    Login
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AuthModal;