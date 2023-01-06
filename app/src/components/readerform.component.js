// React-Bootstrap components are imported from the react-bootstrap package.
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function ReaderForm() {
    return (
        <Row className='m-5 p-3 justify-content-md-center'>
            <Col md='4'>
                <Form className="border p-3">
                    <h3>Meater Reading Data</h3>
                    <Form.Group controlId="formBasicText" className='mb-2'>
                        <Form.Label>Customer Account Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Customer Account Number" />
                    </Form.Group>

                    <Form.Group controlId="formBasicDate" className='mb-3'>
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" min={Date()} placeholder="Date" />
                    </Form.Group>

                    <Form.Group controlId="formBasicNumber" className='mb-2'>
                        <Form.Label>Meater Reading</Form.Label>
                        <Form.Control type="Number" placeholder="Enter Customer Meter Reading" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Form>

            </Col>
        </Row>

    );
}

export default ReaderForm;