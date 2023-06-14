import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

const Panel_admin = () => {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('http://localhost:4800/api/users');
                setUsers(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUsers();
    }, []);

    const deleteUser = async () => {
        try {
            await axios.delete(`http://localhost:4800/api/users/${selectedUser._id}`);
            setUsers(users.filter(user => user._id !== selectedUser._id));
            setShowModal(false);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    return (
        <div className="container">
            <h1>Panel de administrador</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => handleDelete(user)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedUser && <p>¿Estás seguro de que quieres eliminar al usuario {selectedUser.name}?</p>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={deleteUser}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Panel_admin;
