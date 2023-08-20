import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Result from './components/Result';

function App() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [client, setClient] = useState('');
    const [contractor, setContractor] = useState('');
    const [max_X, setMax_X] = useState('');
    const [min_X, setMin_X] = useState('');
    const [max_Y, setMax_Y] = useState('');
    const [min_Y, setMin_Y] = useState('');
    const [max_Z, setMax_Z] = useState('');
    const [min_Z, setMin_Z] = useState('');
    return (
        <div>
            <Routes>
                <Route path="/" element={<Form1 name={name} description={description} client={client} contractor={contractor} setName={setName} setDescription={setDescription} setContractor={setContractor} setClient={setClient}></Form1>}></Route>
                <Route path="/form2" element={<Form2 name={name} description={description} client={client} contractor={contractor} max_X={max_X} min_X={min_X} max_Y={max_Y} min_Y={min_Y} max_Z={max_Z} min_Z={min_Z} setMax_X={setMax_X} setMin_X={setMin_X} setMax_Y={setMax_Y} setMin_Y={setMin_Y} setMax_Z={setMax_Z} setMin_Z={setMin_Z}></Form2>}></Route>
                <Route path="/result" element={<Result name={name} description={description} client={client} contractor={contractor} max_X={max_X} min_X={min_X} max_Y={max_Y} min_Y={min_Y} max_Z={max_Z} min_Z={min_Z}></Result>}></Route>
            </Routes>
        </div>
    );
}

export default App;
