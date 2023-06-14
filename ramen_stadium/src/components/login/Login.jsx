import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const Login = ({ closeModal }) => {
    const { setUser, setIsLoggedIn } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:4800/api/auth/login', { email, password });
            const userResponse = await axios.get(`http://localhost:4800/api/user?email=${email}`);
            closeModal();
            setUser(userResponse.data);
            setIsLoggedIn(true);
        } catch (error) {
            console.log('Error de inicio de sesión:', error.response.data);
            setError('Credenciales no válidas'); // Establece el mensaje de error
        }
    };

    return (
        <MDBContainer fluid>
            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>
                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                            <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                            {error && <p className="text-danger text-center mb-3">{error}</p>}
                            <p className="text-white-50 mb-3">Please enter your login and password!</p>
                            <form onSubmit={handleSubmit} className='p-5 w-100 d-flex flex-column'>
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
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Login;
