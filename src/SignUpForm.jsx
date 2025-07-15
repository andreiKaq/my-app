import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignUpForm({ switchForm }) {
    return (
        <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
                <Form.Text className="text-muted">
                    We will always send your private data to all platforms!
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Create
            </Button>
            <Button variant='link' type='submit' onClick={() => switchForm('sign-in')}>
                Have an account?
            </Button>
        </Form>
    );
}

export default SignUpForm;