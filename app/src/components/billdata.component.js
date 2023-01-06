// React-Bootstrap components are imported from the react-bootstrap package.
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import React from 'react';

function EnterCustomerData() {
    return (
        <Row className='mt-4 m-1 justify-content-md-center'>
            <Col md='4'>
                <Form className="p-4">
                    <h2>Meater Reading Data</h2>
                    <Form.Group controlId="formBasicEmail" className='mb-3'>
                        <Form.Label>Customer Account Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Customer Account Number" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}

function CustomerReport() {
    return (
        <Row className='m-1'>
            <Col md='12'>
                <Container className="p-3">
                    <Form className="border p-3">
                        <h2>Customer Report</h2>
                        <Form.Group as={Col} md='4' controlId="formBasicText" className='mb-2'>
                            <Form.Label>Customer Account Number:</Form.Label>
                            <Form.Control type="text" placeholder=" Customer Account Number" disabled />
                        </Form.Group>
                        {/* Last Reading */}
                        <Row>
                            <Form.Group as={Col} md='6' controlId="formBasicDate" className='mb-3'>
                                <Form.Label>Last Reading Date:</Form.Label>
                                <Form.Control type="text" placeholder="Last Reading Date" disabled />
                            </Form.Group>

                            <Form.Group as={Col} md='6' controlId="formBasicNumber" className='mb-2'>
                                <Form.Label>Last Meter Reading:</Form.Label>
                                <Form.Control type="text" placeholder="Last Meter Reading" disabled />
                            </Form.Group>
                        </Row>
                        {/* Previous Reading */}
                        <Row>
                            <Form.Group as={Col} md='6' controlId="formBasicText" className='mb-2'>
                                <Form.Label>Previous Reading Date:</Form.Label>
                                <Form.Control type="text" placeholder="Previous Reading Date" disabled />
                            </Form.Group>

                            <Form.Group as={Col} md='6' controlId="formBasicDate" className='mb-3'>
                                <Form.Label>Previous Meter Reading:</Form.Label>
                                <Form.Control type="text" placeholder="Previous Meter Reading" disabled />
                            </Form.Group>
                        </Row>

                        {/* Charigning */}
                        <Row>
                            <Form.Group as={Col} md='4' controlId="formBasicNumber" className='mb-2'>
                                <Form.Label>Fixed Charged Amount:</Form.Label>
                                <Form.Control type="text" placeholder="Fixed Charged Amount" disabled />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} md='4' controlId="formBasicText" className='mb-2'>
                                <Form.Label>First Range Bill Amount:</Form.Label>
                                <Form.Control type="text" placeholder="First Range Bill Amount" disabled />
                            </Form.Group>

                            <Form.Group as={Col} md='4' controlId="formBasicDate" className='mb-3'>
                                <Form.Label>Second Range Bill Amount:</Form.Label>
                                <Form.Control type="text" placeholder="Second Range Bill Amount" disabled />
                            </Form.Group>

                            <Form.Group as={Col} md='4' controlId="formBasicNumber" className='mb-2'>
                                <Form.Label>Third Range Bill Amount:</Form.Label>
                                <Form.Control type="text" placeholder="Third Range Bill Amount" disabled />
                            </Form.Group>
                        </Row>

                        <Form.Group as={Col} md='4' controlId="formBasicNumber" className='mb-2'>
                            <Form.Label><b>Total Billed Amount:</b></Form.Label>
                            <Form.Control type="text" placeholder="Total Billed Amount" disabled />
                        </Form.Group>

                    </Form>
                </Container>
            </Col>
        </Row >
    );
}

function BillData() {
    const [reportEnable, setReportEnable] = React.useState(true); // to add default value use -> React.useState(true)


    return (
        <>
            <EnterCustomerData />
            {reportEnable && <CustomerReport />}
        </>
    );

}

export default BillData;