import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import axios from 'axios';

const Login = ({ handleLogin, closeModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:4800/api/auth/login', { email, password });
            handleLogin(); // Llama a la función handleLogin del componente NavBar
            closeModal(); // Cierra el modal
            // Realiza alguna acción adicional después de un inicio de sesión exitoso
            console.log('Inicio de sesión exitoso:', response.data);
            // Realiza alguna acción adicional después de un inicio de sesión exitoso

        } catch (error) {
            console.log('Error de inicio de sesión:', error.response.data);
            // Realiza alguna acción adicional en caso de un error de inicio de sesión
        }
    };

    return (
        <MDBContainer fluid>
            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>
                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                            <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                            <p className="text-white-50 mb-3">Please enter your login and password!</p>
                            <form onSubmit={handleSubmit} className='p-5 w-100 d-flex flex-column' >
                                <MDBInput
                                    wrapperClass='mb-4 w-100'
                                    label='Email address'
                                    id='formControlLg'
                                    type='email'
                                    size="lg"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <MDBInput
                                    wrapperClass='mb-4 w-100'
                                    label='Password'
                                    id='formControlLg'
                                    type='password'
                                    size="lg"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
                                <MDBBtn type="submit" size='lg'>Login</MDBBtn>
                            </form>
                            <hr className="my-4" />
                            <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }}>
                                <MDBIcon fab icon="google" className="mx-2" />
                                Sign in with Google
                            </MDBBtn>
                            <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                                <MDBIcon fab icon="facebook-f" className="mx-2" />
                                Sign in with Facebook
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Login;
