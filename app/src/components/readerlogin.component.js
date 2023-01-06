import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ReaderLogin() {
    return (
        <Row className='m-5 p-3 justify-content-md-center'>
            <Col md='4'>
                <Form className="border p-3">
                    <h3>Reader Login</h3>
                    <Form.Group controlId="formBasicEmail" className='mb-2'>
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            Please Enter the Reader Password
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>

            </Col>
        </Row>

    );
}
export default ReaderLogin;