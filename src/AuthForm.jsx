import React from 'react';
import Form from 'react-bootstrap/Form';
import AuthControl from './AuthControl';
import { signIn } from './services/api/Auth';

const actions = {
    SignIn: 'signIn',
    SignUp: 'signUp',

}

function AuthForm({formRef, setAuthData, handleClose}) {
    const [action, setAction] = React.useState(actions.SignIn)

    const handleOnSelect = (action) => setAction(action)
    
    const handleSubmit = async event => {
        event.preventDefault()
        
        const username = event.target.username.value
        // const email = event.target.email?.value
        const password = event.target.password.value        
        
        const { token } = await signIn(username, password)

        setAuthData(authData => ({...authData, jwt: token}))

        handleClose()
    }

    return (
        <Form ref={formRef} onSubmit={handleSubmit}>
            <AuthControl action={action} actions={actions} handleOnSelect={handleOnSelect} />
            <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" name='username' defaultValue='hopkins'/>
            </Form.Group>

            {action === actions.SignUp && (
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="email" name='email'/>
                </Form.Group>

            )}



            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' defaultValue='William56$hj'/>
            </Form.Group>
        </Form>
    );
}

export default AuthForm;