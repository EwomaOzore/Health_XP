import React, { useState } from 'react';
import { User, Qualifications } from '../type/user';
import testSvg from '../assets/hlogo.svg';

interface ThirdFormProps {
    onRegister: (qualifications: Qualifications) => void;
}

const ThirdForm = ({ onRegister }: ThirdFormProps) => {
    const [university, setUniversity] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [graduationYear, setGraduationYear] = useState('');
    const [postGradCollege, setPostGradCollege] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!university || !specialization || !graduationYear || !postGradCollege || !registrationNumber) {
            alert('Please fill in all the required fields.');
            return;
        }

        const qualifications: Qualifications = {
            university,
            specialization,
            graduationYear,
            postGradCollege,
            registrationNumber,
        };

        onRegister(qualifications);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className='logo'><img src={testSvg} alt="Resistration Successful" /><h1>healthXP</h1></div>
                <div className="heading">
                    <h1>Educational Qualifications</h1>
                    <div className="nav">
                        <div className="nav-item">1</div><hr />
                        <div className="nav-item">2</div><hr />
                        <div className="nav-item active">3</div>
                    </div>
                </div>
                <div className="form">
                    <input
                        type="text"
                        placeholder="University"
                        value={university}
                        onChange={(e) => setUniversity(e.target.value)}
                        required
                    />
                    <br />
                    <select
                        value={specialization}
                        onChange={(e) => setSpecialization(e.target.value)}
                        required
                    >
                        <option value="">Specialization</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="Gynecology">Gynecology</option>
                        <option value="Physiology">Physiology</option>
                        <option value="Pharmacology">Pharmacology</option>
                        {/* Add more options as needed */}
                    </select>
                    <br />
                    <input
                        type="date"
                        placeholder="Year of Graduation"
                        value={graduationYear}
                        onChange={(e) => setGraduationYear(e.target.value)}
                        required
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Post Graduate College"
                        value={postGradCollege}
                        onChange={(e) => setPostGradCollege(e.target.value)}
                        required
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Registration Number"
                        value={registrationNumber}
                        onChange={(e) => setRegistrationNumber(e.target.value)}
                        required
                    />
                    <div className="btn">
                        <button type="submit" className="submit">Register</button>
                    </div>
                </div>
            </div>
            <div className="ellipse1">
                <div className="ellipse2">
                    <div className="ellipse3"></div>
                </div>
            </div>
        </form>
    );
};

export default ThirdForm;
