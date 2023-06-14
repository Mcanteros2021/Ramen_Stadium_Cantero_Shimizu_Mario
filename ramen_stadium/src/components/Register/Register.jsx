import React, { useState } from 'react';
import axios from 'axios';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import Login from '../login/Login';

function Register({closeModal, openLoginModal}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        // Validación del nombre
        if (name.trim() === '') {
            newErrors.name = 'El nombre es obligatorio';
            isValid = false;
        }

        // Validación del correo electrónico
        if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Correo electrónico inválido';
            isValid = false;
        }

        // Validación de la contraseña
        if (password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
            isValid = false;
        }

        // Validación de la repetición de la contraseña
        if (password !== repeatPassword) {
            newErrors.repeatPassword = 'Las contraseñas no coinciden';
            isValid = false;
        }

        setErrors(newErrors);

        return isValid;
    };

    const registerUser = async () => {
        if (!validateForm()) {
            return;
        }

        try {
            const userData = { name, email, password };
            await axios.post('http://localhost:4800/api/auth/register', userData);
            closeModal();
            openLoginModal();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                <MDBCardBody className='px-5'>
                    <h2 className="text-uppercase text-center mb-5">Crear una cuenta</h2>
                    <MDBInput
                        wrapperClass='mb-4'
                        label='Nombre'
                        size='lg'
                        id='form1'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={errors.name ? 'is-invalid' : ''}
                    />
                    {errors.name && <div className="text-danger">{errors.name}</div>}

                    <MDBInput
                        wrapperClass='mb-4'
                        label='Correo Electrónico'
                        size='lg'
                        id='form2'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={errors.email ? 'is-invalid' : ''}
                    />
                    {errors.email && <div className="text-danger">{errors.email}</div>}

                    <MDBInput
                        wrapperClass='mb-4'
                        label='Contraseña'
                        size='lg'
                        id='form3'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={errors.password ? 'is-invalid' : ''}
                    />
                    {errors.password && <div className="text-danger">{errors.password}</div>}

                    <MDBInput
                        wrapperClass='mb-4'
                        label='Repetir Contraseña'
                        size='lg'
                        id='form4'
                        type='password'
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        className={errors.repeatPassword ? 'is-invalid' : ''}
                    />
                    {errors.repeatPassword && <div className="text-danger">{errors.repeatPassword}</div>}

                    <div className='d-flex flex-row justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Acepto todos los términos y condiciones' />
                    </div>
                    <MDBBtn onClick={registerUser} className='mb-4 w-100 gradient-custom-4' size='lg'>Registrar</MDBBtn>
                </MDBCardBody>
            </MDBCard>


        </MDBContainer>
    );
}

export default Register;
