import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Form2 = ({ name, description, client, contractor, max_X, min_X, max_Y, min_Y, max_Z, min_Z, setMax_X, setMin_X, setMax_Y, setMin_Y, setMax_Z, setMin_Z }) => {
    const navigate = useNavigate();
    const [files, setFiles] = useState();
    const [items, setItems] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        setFiles(file);

        // create url from the file
        const fileUrl = URL.createObjectURL(file);

        // use fetch API to read the file
        const response = await fetch(fileUrl);

        // get the text from the response
        const text = await response.text();

        // split the text by newline
        const lines = text.split('\n');

        // map through all the lines and split each line by comma
        const _data = lines.map((line) => line.split(','));

        // all kp value in a array
        const kp = _data.slice(1, -1).map((data) => data[0]);

        // all X value in a array
        const xVal = _data.slice(1, -1).map((data) => data[1]);
        const item = kp.map((x, i) => {
            return {
                kp_x_axis: x,
                xVal_y_axis: xVal[i],
            };
        });
        setItems(item);
        setMax_X(Math.max(...xVal));
        setMin_X(Math.min(...xVal));

        // all Y value in a array
        const yVal = _data.slice(1, -1).map((data) => data[2]);
        setMax_Y(Math.max(...yVal));
        setMin_Y(Math.min(...yVal));

        // all Z value in a array
        const zVal = _data.slice(1, -1).map((data) => data[3]);
        setMax_Z(Math.max(...zVal));
        setMin_Z(Math.min(...zVal));
    };

    return (
        <div>
            <h1 className="text-center">Welcome to XYZ Company</h1>
            <h3 className="text-center text-color">Please provide the following Information</h3>
            <div className="center">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Project Name" defaultValue={name} disabled />
                    <br />
                    <textarea type="text" name="description" placeholder="Project Description" defaultValue={description} disabled></textarea>
                    <br />
                    <input type="text" name="client" placeholder="Client" defaultValue={client} disabled />
                    <br />
                    <input type="text" name="contractor" placeholder="Contractor" defaultValue={contractor} disabled />
                    <br />
                    <input type="file" name="csvFile" accept=".csv" onChange={handleFileChange} />
                    <br />
                    <input type="number" name="max_X" placeholder="max_X" value={max_X} onChange={(e) => setMax_X(e.target.value)} />
                    <br />
                    <input type="number" name="min_X" placeholder="min_X" value={min_X} onChange={(e) => setMin_X(e.target.value)} />
                    <br />
                    <input type="number" name="max_Y" placeholder="max_Y" value={max_Y} onChange={(e) => setMax_Y(e.target.value)} />
                    <br />
                    <input type="number" name="min_Y" placeholder="min_Y" value={min_Y} onChange={(e) => setMin_Y(e.target.value)} />
                    <br />
                    <input type="number" name="max_Z" placeholder="max_Z" value={max_Z} onChange={(e) => setMax_Z(e.target.value)} />
                    <br />
                    <input type="number" name="min_Z" placeholder="min_Z" value={min_Z} onChange={(e) => setMin_Z(e.target.value)} />
                    <br />
                    <button onClick={() => navigate('/')} className="gap-right">
                        Back
                    </button>
                    <button onClick={() => navigate('/result')} type="submit">
                        Submit to Table
                    </button>
                </form>
            </div>
            {files ? (
                <div className="center">
                    <LineChart
                        width={1300}
                        height={600}
                        data={items}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="kp_x_axis" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="xVal_y_axis" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default Form2;
