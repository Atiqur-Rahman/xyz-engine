import React from 'react';
import { useNavigate } from 'react-router-dom';

const Form1 = ({ name, description, client, contractor, setName, setDescription, setClient, setContractor }) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h1 className="text-center">Welcome to XYZ Company</h1>
            <h3 className="text-center text-color">Please provide the following Information</h3>
            <div className="center">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Project Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <br />
                    <textarea type="text" name="description" placeholder="Project Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <br />
                    <input type="text" name="client" placeholder="Client" value={client} onChange={(e) => setClient(e.target.value)} />
                    <br />
                    <input type="text" name="contractor" placeholder="Contractor" value={contractor} onChange={(e) => setContractor(e.target.value)} />
                    <br />
                    <button onClick={() => navigate('/form2')} type="submit">
                        Next
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form1;
