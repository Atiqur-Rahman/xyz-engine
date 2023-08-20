import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Form1 from './components/Form1';

function App() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [client, setClient] = useState('');
    const [contractor, setContractor] = useState('');
    return (
        <div>
            <Routes>
                <Route path="/" element={<Form1 name={name} description={description} client={client} contractor={contractor} setName={setName} setDescription={setDescription} setContractor={setContractor} setClient={setClient}></Form1>}></Route>
            </Routes>
        </div>
    );
}

export default App;
