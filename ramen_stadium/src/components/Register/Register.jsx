import React from 'react';
import "./Register.scss";
import axios from 'axios';
import { useState } from 'react';

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const registerUser = async () => {
        try {
            const userData = { name, email, password };
            console.log(password)
            const response = await axios.post('http://localhost:4800/api/auth/register', userData);
            // La respuesta del servidor está disponible en 'response.data'
            console.log(response.data);
            // Realizar acciones adicionales con la respuesta del servidor
        } catch (error) {
            // Manejar el error de la solicitud
            console.error(error);
        }
    };


    return (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{maxWidth: '600px'}}>
                <MDBCardBody className='px-5'>
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                    <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' value={name}
                              onChange={(e) => setName(e.target.value)}/>
                    <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'  value={email}
                              onChange={(e) => setEmail(e.target.value)}/>
                    <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'  value={password}
                              onChange={(e) => setPassword(e.target.value)}/>
                    <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' value={repeatPassword}
                              onChange={(e) => setRepeatPassword(e.target.value)}/>
                    <div className='d-flex flex-row justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                    </div>
                    <MDBBtn onClick={registerUser} className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default Register;