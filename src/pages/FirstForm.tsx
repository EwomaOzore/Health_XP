import React, { useState } from 'react';
import { SendRegitrationForm } from "../Helper/Backend";
import { User } from '../type/user';
import testSvg from '../assets/hlogo.svg';
import eyeSvg from '../assets/eye-show-svgrepo-com.svg';
import eyeSlashSvg from '../assets/eye-off-svgrepo-com.svg';

interface FirstFormProps {
    onNext: (user: User) => void;
}

const FirstForm = ({ onNext }: FirstFormProps) => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [fullNameError, setFullNameError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [emailExistsError, setEmailExistsError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate form inputs
        let isValid = true;

        if (!fullName) {
            setFullNameError('Please enter your full name.');
            isValid = false;
        } else if (fullName.length < 2 || fullName.length > 30) {
            setFullNameError('Full name must be between 2 and 30 characters.');
            isValid = false;
        } else {
            setFullNameError('');
        }

        if (!phoneNumber) {
            setPhoneNumberError('Please enter your phone number.');
            isValid = false;
        } else {
            setPhoneNumberError('');
        }

        if (!email) {
            setEmailError('Please enter your email.');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Please enter your password.');
            isValid = false;
        } else if (!/(?=.*[A-Z])(?=.*\d)/.test(password)) {
            setPasswordError('Password must contain a Capital letter and a Number.');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (!confirmPassword) {
            setConfirmPasswordError('Please confirm your password.');
            isValid = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match.');
            isValid = false;
        } else {
            setConfirmPasswordError('');
        }

        if (isValid) {
            const user: User = {
                fullName,
                phoneNumber,
                email,
                password,
                confirmPassword,
            };

            try {
                await SendRegitrationForm(user);
                onNext(user);
            } catch (error) {
                setEmailExistsError('Email has already been used.');
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className='logo'><img src={testSvg} alt="Registration Successful" /><h1>healthXP</h1></div>
                <div className="heading">
                    <p>Are you a Doctor?</p>
                    <h1>Register Today</h1>
                    <div className="nav">
                        <div className="nav-item active">1</div><hr className='active' />
                        <div className="nav-item">2</div><hr />
                        <div className="nav-item">3</div>
                    </div>
                </div>
                <div className="form">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                    {fullNameError && <span className="error">{fullNameError}</span>}
                    <br />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                    {phoneNumberError && <span className="error">{phoneNumberError}</span>}
                    <br />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {emailError && <span className="error">{emailError}</span>}
                    {emailExistsError && <span className="error">{emailExistsError}</span>}
                    <br />
                    <div className="password-input">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="password-toggle"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <img src={eyeSvg} alt="Hide" /> : <img src={eyeSlashSvg} alt="Show" />}
                        </button>
                    </div>
                    {passwordError && <span className="error">{passwordError}</span>}
                    <br />
                    <div className="password-input">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="password-toggle"
                            onClick={toggleConfirmPasswordVisibility}
                        >
                            {showConfirmPassword ? <img src={eyeSvg} alt="Hide" /> : <img src={eyeSlashSvg} alt="Show" />}
                        </button>
                    </div>
                    {confirmPasswordError && <span className="error">{confirmPasswordError}</span>}
                    <div className="btn">
                        <button type="submit" className="next">Next</button>
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

export default FirstForm;
