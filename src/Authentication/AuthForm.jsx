import React from 'react';
import Form from 'react-bootstrap/Form';
import AuthControl from './AuthControl';
import { signIn } from '../services/api/Auth';
import { signUp } from '../services/api/Auth';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode'

const actions = {
    SignIn: 'signIn',
    SignUp: 'signUp',

}

function AuthForm({ formRef, onSuccess, onError  }) {
    const dispatch = useDispatch()
    const [action, setAction] = React.useState(actions.SignIn)

    const handleOnSelect = next => setAction(next)

    const handleSubmit = async event => {
        event.preventDefault()
        const username = event.target.username.value
        const password = event.target.password.value

        try {
            if (action === actions.SignIn) {
                const { token } = await signIn(username, password)
                onSuccess({data: jwtDecode(token)})
                
            } else {
                const email = event.target.email?.value
                const user = await signUp(username, email, password)
                onSuccess({ data: user })
            }
        } catch (err) {
            onError(err.message || 'Ошибка авторизации')
        }
    }

    return (
        <Form ref={formRef} onSubmit={handleSubmit}>
            <AuthControl
                action={action}
                actions={actions}
                handleOnSelect={handleOnSelect}
            />

            <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    defaultValue="hopkins"
                />
            </Form.Group>

            {action === actions.SignUp && (
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
                        name="email"
                    />
                </Form.Group>
            )}

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    defaultValue="William56$hj"
                />
            </Form.Group>
        </Form>
    )
}

export default AuthForm;