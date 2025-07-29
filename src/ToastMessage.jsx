import Toast from 'react-bootstrap/Toast'
import { useSelector, useDispatch } from 'react-redux'
import { setToastMessage } from './services/state/store'

const ToastMessage = () => {

    const dispatch = useDispatch()
    const message = useSelector(state => state.toastMessage)

    const handleClose = () => {
        dispatch(setToastMessage(null))
    }

    if (!message) return null

    return (
        <Toast
        onClose={handleClose}
        show={'true'}
        delay={3000}
        autohide
        className='position-absolute bottom-0 end-0 text-white'
        bg='success'
        >
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    )
}

export default ToastMessage