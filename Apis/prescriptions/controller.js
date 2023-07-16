const patientPrescriptions = [
	{
		id: 1,
		name: "Joyneel Acharya",
		dateOfBirth: "16 May 1991",
		dateOfIssue: "30 Nov 2020",

		medicationsData: [
			{
				name: "ibuprofen 600mg tab",
				reason: "For treatment of lower back pain.",
				type: "tablet",
				directions: "1 tablet by mouth 4 times a day with food",
				times: ["8:00AM", "12:00PM", "4:00PM", "8:00PM"],

				possibleSideEffects: ["Headache", "Dizziness"],
				dosage: "1 tablet",
				frequency: "4 times per day",
				frequencyType: "hours",
				duration: "6 months",
				contraindications: ["Allergic to terazosin"],
				interactions: ["Do not take with other alpha-blockers"],
				otherInformation: "May cause drowsiness",
			},
			{
				name: "insulin, glargine, human 100 unt/ml inj",
				reason: "Reduce blood pressure.",
				type: "Injection",
				directions: "1 injection at bedtime",
				times: ["Bedtime"],
				possibleSideEffects: ["Headache", "Fatigue", "Nausea"],
				dosage: "25 units",
				frequency: "1 time per day",
				frequencyType: "periods",
				duration: "12 months",
				contraindications: ["Allergic to terazosin"],
				interactions: ["Do not take with other alpha-blockers"],
				otherInformation: "May cause drowsiness",
			},
			{
				name: "terazosin hcl 2mg capsule",
				reason: "For treatment of symptoms of an enlarged prostate.",
				type: "capsule",
				directions: "3 capsules before bed",
				times: ["Bedtime"],
				possibleSideEffects: ["Headache", "Fatigue", "Nausea"],
				dosage: "3 capsules",
				frequency: "1 time per day",
				frequencyType: "periods",
				duration: "12 months",
				contraindications: ["Allergic to terazosin"],
				interactions: ["Do not take with other alpha-blockers"],
				otherInformation: "May cause drowsiness",
			},
		],
	},
	{
		id: 2,
		name: "John doe",
		dateOfBirth: "16 Dec 1998",
		dateOfIssue: "30 Nov 2020",

		medicationsData: [
			{
				name: "ibuprofen 600mg tab",
				reason: "For treatment of lower back pain.",
				type: "tablet",
				directions: "1 tablet by mouth 4 times a day with food",
				times: ["8:00AM", "12:00PM", "4:00PM", "8:00PM"],

				possibleSideEffects: ["Headache", "Dizziness"],
				dosage: "1 tablet",
				frequency: "4 times per day",
				frequencyType: "hours",
				duration: "6 months",
				contraindications: ["Allergic to terazosin"],
				interactions: ["Do not take with other alpha-blockers"],
				otherInformation: "May cause drowsiness",
			},
			{
				name: "insulin, glargine, human 100 unt/ml inj",
				reason: "Reduce blood pressure.",
				type: "Injection",
				directions: "1 injection at bedtime",
				times: ["Bedtime"],
				possibleSideEffects: ["Headache", "Fatigue", "Nausea"],
				dosage: "25 units",
				frequency: "1 time per day",
				frequencyType: "periods",
				duration: "12 months",
				contraindications: ["Allergic to terazosin"],
				interactions: ["Do not take with other alpha-blockers"],
				otherInformation: "May cause drowsiness",
			},
			{
				name: "terazosin hcl 2mg capsule",
				reason: "For treatment of symptoms of an enlarged prostate.",
				type: "capsule",
				directions: "3 capsules before bed",
				times: ["Bedtime"],
				possibleSideEffects: ["Headache", "Fatigue", "Nausea"],
				dosage: "3 capsules",
				frequency: "1 time per day",
				frequencyType: "periods",
				duration: "12 months",
				contraindications: ["Allergic to terazosin"],
				interactions: ["Do not take with other alpha-blockers"],
				otherInformation: "May cause drowsiness",
			},
		],
	},
	{
		id: 3,
		name: "Denis Ivy",
		dateOfBirth: "16 May 1996",
		dateOfIssue: "30 Nov 2019",

		medicationsData: [
			{
				name: "ibuprofen 600mg tab",
				reason: "For treatment of lower back pain.",
				type: "tablet",
				directions: "1 tablet by mouth 4 times a day with food",
				times: ["8:00AM", "12:00PM", "4:00PM", "8:00PM"],

				possibleSideEffects: ["Headache", "Dizziness"],
				dosage: "1 tablet",
				frequency: "4 times per day",
				frequencyType: "hours",
				duration: "6 months",
				contraindications: ["Allergic to terazosin"],
				interactions: ["Do not take with other alpha-blockers"],
				otherInformation: "May cause drowsiness",
			},
			{
				name: "insulin, glargine, human 100 unt/ml inj",
				reason: "Reduce blood pressure.",
				type: "Injection",
				directions: "1 injection at bedtime",
				times: ["Bedtime"],
				possibleSideEffects: ["Headache", "Fatigue", "Nausea"],
				dosage: "25 units",
				frequency: "1 time per day",
				frequencyType: "periods",
				duration: "12 months",
				contraindications: ["Allergic to terazosin"],
				interactions: ["Do not take with other alpha-blockers"],
				otherInformation: "May cause drowsiness",
			},
			{
				name: "terazosin hcl 2mg capsule",
				reason: "For treatment of symptoms of an enlarged prostate.",
				type: "capsule",
				directions: "3 capsules before bed",
				times: ["Bedtime"],
				possibleSideEffects: ["Headache", "Fatigue", "Nausea"],
				dosage: "3 capsules",
				frequency: "1 time per day",
				frequencyType: "periods",
				duration: "12 months",
				contraindications: ["Allergic to terazosin"],
				interactions: ["Do not take with other alpha-blockers"],
				otherInformation: "May cause drowsiness",
			},
		],
	},
];

exports.getAvailableUsers = (req, res) => {
	const users = patientPrescriptions.map((eachUser) => ({
		id: eachUser.id,
		name: eachUser.name,
	}));

	res.send(users);
};

exports.getUserData = (req, res) => {
	const { userId } = req.params;
	const userData = patientPrescriptions.filter((each) => each.id == userId);
	if (userData.length === 0) {
		return res.status(400).send({ res: "User not Available" });
	}
	res.send({ userData: userData[0] });
};
