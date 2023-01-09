import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

// React-Bootstrap components are imported from the react-bootstrap package.
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function EnterCustomerData() {

    const [BillDataofUser, setBillData] = React.useState([]);
    const [billerdata, setBillerData] = React.useState([]);
    const { register, handleSubmit } = useForm();

    const Data = (data) => {
        //console.log(data);
        //console.log(data.accNumber);

        const id = data.accNumber;
        axios.get("http://localhost:3500/bill/data/" + id)
            .then((res) => {
                //console.log(">>>" + res.data);
                setBillData(res.data);
                //console.log(BillDataofUser);
            })
            .catch((err) => console.log(err))

        let lengthofBillData = BillDataofUser.length;
        console.log(lengthofBillData);
        const accnum = BillDataofUser[0].acc_number;
        const lastReadingDate = BillDataofUser[lengthofBillData - 1].date;
        const lastMeterReading = BillDataofUser[lengthofBillData - 1].reading;
        const prevReadingDate = BillDataofUser[lengthofBillData - 2].date;
        const prevMeterReading = BillDataofUser[lengthofBillData - 2].reading;

        let unitsConsumed = lastMeterReading - prevMeterReading;

        //calculate date difference
        const date1 = new Date(lastReadingDate);
        const date2 = new Date(prevReadingDate);
        const Difference_In_Time = date1.getTime() - date2.getTime();
        const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

        let firstRange = Difference_In_Days;
        let secondRange = Difference_In_Days * 2;

        let firstRangeUnitPrice = 20;
        let secondRangeUnitPrice = 35;
        let thirdRangeUnitPrice = 40;

        let firstRangeFixedPrice = 500;
        let secondRangeFixedPrice = 1000;
        let thirdRangeFixedPrice = 1500;
        var firstRangeBill;
        var secondRangeBill;
        var thirdRangeBill;
        var thirdRange;
        var fixedValue;
        var totalBill;

        if (unitsConsumed <= firstRange) {
            firstRangeBill = (unitsConsumed) * firstRangeUnitPrice;
            fixedValue = firstRangeFixedPrice;
            totalBill = firstRangeBill + fixedValue;
        } else if (unitsConsumed <= (secondRange + firstRange)) {
            firstRangeBill = (firstRange) * firstRangeUnitPrice;
            secondRangeBill = (unitsConsumed - firstRange) * secondRangeUnitPrice;
            fixedValue = secondRangeFixedPrice;
            totalBill = firstRangeBill + fixedValue;
        } else {
            thirdRangeBill = 0;
            thirdRange = unitsConsumed - (secondRange + firstRange);
            for (let i = 0; i < thirdRange; i++) {
                thirdRangeBill = thirdRangeUnitPrice + i + thirdRangeBill;
            }

            firstRangeBill = (firstRange) * firstRangeUnitPrice;
            secondRangeBill = (secondRange) * secondRangeUnitPrice;
            fixedValue = thirdRangeFixedPrice;
            totalBill = firstRangeBill + secondRangeBill + thirdRangeBill + fixedValue;
        }

        const biller = {
            accnum,
            firstRange,
            secondRange,
            lastReadingDate,
            lastMeterReading,
            prevReadingDate,
            prevMeterReading,
            firstRangeBill,
            secondRangeBill,
            thirdRangeBill,
            fixedValue,
            totalBill,
            thirdRange,
            unitsConsumed
        }
        setBillerData(biller);
        console.log(billerdata);

    }

    return (
        <>
            <Row className='mt-4 m-1 justify-content-md-center'>
                <Col md='4'>
                    <Form className="p-4" onSubmit={handleSubmit(Data)}>
                        <h2>Meater Reading Data</h2>
                        <Form.Group controlId="formBasicEmail" className='mb-3'>
                            <Form.Label>Customer Account Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Customer Account Number" {...register("accNumber")} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row className='m-1'>
                <Col md='12'>
                    <Container className="p-3">
                        <Form className="border p-3">
                            <h2>Customer Report</h2>
                            <Form.Group as={Col} md='4' controlId="formBasicText" className='mb-2'>
                                <Form.Label>Customer Account Number:</Form.Label>
                                <Form.Control type="text" placeholder=" Customer Account Number" disabled value={billerdata.accnum} />
                            </Form.Group>
                            {/* Last Reading */}
                            <Row>
                                <Form.Group as={Col} md='6' controlId="formBasicDate" className='mb-3'>
                                    <Form.Label>Last Reading Date:</Form.Label>
                                    <Form.Control type="text" placeholder="Last Reading Date" disabled value={billerdata.lastReadingDate} />
                                </Form.Group>

                                <Form.Group as={Col} md='6' controlId="formBasicNumber" className='mb-2'>
                                    <Form.Label>Last Meter Reading:</Form.Label>
                                    <Form.Control type="text" placeholder="Last Meter Reading" disabled value={billerdata.lastMeterReading} />
                                </Form.Group>
                            </Row>
                            {/* Previous Reading */}
                            <Row>
                                <Form.Group as={Col} md='6' controlId="formBasicText" className='mb-2'>
                                    <Form.Label>Previous Reading Date:</Form.Label>
                                    <Form.Control type="text" placeholder="Previous Reading Date" disabled value={billerdata.prevReadingDate} />
                                </Form.Group>

                                <Form.Group as={Col} md='6' controlId="formBasicDate" className='mb-3'>
                                    <Form.Label>Previous Meter Reading:</Form.Label>
                                    <Form.Control type="text" placeholder="Previous Meter Reading" disabled value={billerdata.prevMeterReading} />
                                </Form.Group>
                            </Row>

                            {/* Charigning */}
                            <Row>
                                <Form.Group as={Col} md='4' controlId="formBasicNumber" className='mb-2'>
                                    <Form.Label>Fixed Charged Amount:</Form.Label>
                                    <Form.Control type="text" placeholder="Fixed Charged Amount" disabled value={billerdata.fixedValue} />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} md='4' controlId="formBasicText" className='mb-2'>
                                    <Form.Label>First Range Bill Amount:</Form.Label>
                                    <Form.Control type="text" placeholder="First Range Bill Amount" disabled value={billerdata.firstRangeBill} />
                                </Form.Group>

                                <Form.Group as={Col} md='4' controlId="formBasicDate" className='mb-3'>
                                    <Form.Label>Second Range Bill Amount:</Form.Label>
                                    <Form.Control type="text" placeholder="Second Range Bill Amount" disabled value={billerdata.secondRangeBill} />
                                </Form.Group>

                                <Form.Group as={Col} md='4' controlId="formBasicNumber" className='mb-2'>
                                    <Form.Label>Third Range Bill Amount:</Form.Label>
                                    <Form.Control type="text" placeholder="Third Range Bill Amount" disabled value={billerdata.thirdRangeBill} />
                                </Form.Group>
                            </Row>

                            <Form.Group as={Col} md='4' controlId="formBasicNumber" className='mb-2'>
                                <Form.Label><b>Total Billed Amount:</b></Form.Label>
                                <Form.Control type="text" placeholder="Total Billed Amount" disabled value={billerdata.totalBill} />
                            </Form.Group>

                        </Form>
                    </Container>
                </Col>
            </Row >
        </>
    );
}



function BillData() {
    return (
        <>
            <EnterCustomerData />
        </>
    );

}

export default BillData;