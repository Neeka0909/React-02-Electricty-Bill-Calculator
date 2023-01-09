//package imports
import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

// React-Bootstrap components are imported from the react-bootstrap package.
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ReaderLogin() {

    const { register, handleSubmit } = useForm();

    const [reader, setReader] = React.useState([])
    const DataSubmit = (data) => {
        console.log(data.userName);
        const id = data.userName;
        console.log(id);
        axios.get("http://localhost:3500/reader/acc/" + id)
            .then((res) => {
                setReader(res.data);
                const storedPassword = res.data[0].Password;
                console.log(reader);
                const givenPassword = data.password;
                //const storedPassword = reader[0].Password;

                if (storedPassword === givenPassword) {
                    alert("Login Successful");
                    window.location.replace('http://localhost:3000/readerform');
                } else {
                    alert("Login Failed!!! user name or password Incorrect");
                }
            })
            .catch((err) => console.log(err))
    }

    return (
        <Row className='m-5 p-3 justify-content-md-center'>
            <Col md='4'>
                <Form className="border p-3" onSubmit={handleSubmit(DataSubmit)} >
                    <h3>Reader Login</h3>
                    <Form.Group controlId="formBasicEmail" className='mb-2'>
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter User Name" {...register("userName")} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" {...register("password")} />
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