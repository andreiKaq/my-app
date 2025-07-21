import Toast from 'react-bootstrap/Toast'

const ToastMessage = ({ message, handleclose}) => {
    return (
        <Toast onClose={handleclose} show={Boolean(message)} delay={3000} autohide className='position-absolute bottom-0 end-0 text-white' bg='success'>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    )
}

export default ToastMessage