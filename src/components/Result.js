import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Result = ({ name, description, client, contractor, max_X, min_X, max_Y, min_Y, max_Z, min_Z }) => {
    const navigate = useNavigate();
    const pdfRef = useRef();

    const downloadPDF = () => {
        const input = pdfRef.current;
    };

    return (
        <div>
            <div ref={pdfRef}>
                <table>
                    <thead>
                        <tr>
                            <th className="border-none" colSpan={6}>
                                Project Name: {name}
                            </th>
                        </tr>
                        <tr>
                            <th className="border-none" colSpan={6}>
                                Project Description: {description}
                            </th>
                        </tr>
                        <tr>
                            <th className="border-none" colSpan={6}>
                                Client: {client}
                            </th>
                        </tr>
                        <tr>
                            <th className="border-none" colSpan={6}>
                                Contractor: {contractor}
                            </th>
                        </tr>
                        <tr>
                            <th>max_X</th>
                            <th>min_X</th>
                            <th>max_Y</th>
                            <th>min_Y</th>
                            <th>max_Z</th>
                            <th>min_Z</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{max_X}</td>
                            <td>{min_X}</td>
                            <td>{max_Y}</td>
                            <td>{min_Y}</td>
                            <td>{max_Z}</td>
                            <td>{min_Z}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={() => navigate('/')} className="gap-right">
                    Back to Main Page
                </button>
                <button onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default Result;
