import React, { useState } from 'react';
import FirstForm from './pages/FirstForm';
import SecondForm from './pages/SecondForm';
import ThirdForm from './pages/ThirdForm';
import LastPage from './pages/LastPage';
import { SendRegitrationForm } from "./Helper/Backend";
import { User, Location, Qualifications } from "./type/user";

const App = (): JSX.Element => {
	const [formStep, setFormStep] = useState(1);
	const [userData, setUserData] = useState<User>({
		fullName: "",
		phoneNumber: "",
		email: "",
		password: "",
		confirmPassword: "",
		location: undefined,
		qualifications: undefined,
	});

	const handleNext = (data: User | Location | Qualifications) => {
		setUserData((prevData) => ({ ...prevData, ...data }));
		setFormStep((prevStep) => prevStep + 1);
	};

	const handleRegister = (formData: Qualifications) => {
		setUserData((prevData) => ({ ...prevData, qualifications: formData }));

		// Simulate backend registration
		SendRegitrationForm(userData)
			.then((res) => {
				console.log('Registration success:', res);
				setFormStep(4);
			})
			.catch((error) => {
				console.log('Registration failed:', error);
				// Handle the registration failure case
			});
	};


	const renderFormStep = () => {
		switch (formStep) {
			case 1:
				return <FirstForm onNext={handleNext} />;
			case 2:
				return <SecondForm onNext={handleNext} />;
			case 3:
				return <ThirdForm onRegister={handleRegister} />;
			case 4:
				return <LastPage />;
			default:
				return null;
		}
	};

	return (
		<div className="h-[100vh] w-[100vw] flex justify-center items-center">
			{renderFormStep()}
		</div>
	);
};

export default App;
