interface User {
	fullName: string;
	phoneNumber: string;
	email: string;
	password: string;
	confirmPassword: string;
	location?: Location;
	qualifications?: Qualifications;
}

interface Location {
	country: string;
	city: string;
}

interface Qualifications {
	university: string;
	specialization: string;
	graduationYear: string;
	postGradCollege: string;
	registrationNumber: string;
}

export type { User, Location, Qualifications };
