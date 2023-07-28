import React, { useState } from "react";
import { User, Location } from "../type/user";
import testSvg from '../assets/hlogo.svg';
interface SecondFormProps {
    onNext: (location: Location) => void;
}

const SecondForm = ({ onNext }: SecondFormProps) => {
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!country || !city) {
            alert("Please select the location details.");
            return;
        }

        const location: Location = {
            country,
            city,
        };

        onNext(location);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className='logo'><img src={testSvg} alt="Resistration Successful" /><h1>healthXP</h1></div>
                <div className="heading">
                    <h1>Your Location Details</h1>
                    <div className="nav">
                        <div className="nav-item">1</div><hr />
                        <div className="nav-item active">2</div><hr className="active" />
                        <div className="nav-item">3</div>
                    </div>
                </div>
                <div className="form">
                    <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    >
                        <option value="">Country of Residence</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Liberia">Liberia</option>
                        {/* Add more options as needed */}
                    </select>
                    <br />
                    <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    >
                        <option value="">City/State of Residence (e.g. Lekki,  Lagos)</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Abuja">Abuja</option>
                        <option value="Ogun">Ogun</option>
                        <option value="Kaduna">Kaduna</option>
                        <option value="Delta">Delta</option>
                        {/* Add more options as needed */}
                    </select>
                    <div className="btn">
                        <button type="submit" className="next">
                            Next
                        </button>
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

export default SecondForm;
