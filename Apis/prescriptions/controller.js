const patientsData = [
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
        name: "Loratadine 10mg Tablet",
        reason: "For relief of allergy symptoms.",
        type: "tablet",
        directions: "Take 1 tablet by mouth once daily.",
        times: ["Morning"],
        possibleSideEffects: ["Dry mouth", "Drowsiness"],
        dosage: "1 tablet",
        frequency: "Once a day",
        frequencyType: "times",
        duration: "3 months",
        contraindications: ["Allergic to loratadine or antihistamines"],
        interactions: ["Avoid taking with alcohol or sedatives"],
        otherInformation: "Non-drowsy formula available.",
      },
      {
        name: "Gaviscon Liquid Antacid",
        reason: "For relief of heartburn and acid indigestion.",
        type: "liquid",
        directions: "Take 10-20 ml by mouth after meals and at bedtime.",
        times: ["After meals", "Bedtime"],
        possibleSideEffects: ["Constipation", "Diarrhea"],
        dosage: "10-20 ml",
        frequency: "4 times per day",
        frequencyType: "times",
        duration: "1 month",
        contraindications: ["Allergic to aluminum or magnesium hydroxide"],
        interactions: ["May interfere with the absorption of certain medications"],
        otherInformation: "Shake well before use.",
      },
    ],
  },
  {
    id: 2,
    name: "John Doe",
    dateOfBirth: "25 July 1985",
    dateOfIssue: "10 March 2023",
    medicationsData: [
      {
        name: "Paracetamol 500mg Tablet",
        reason: "For the treatment of headache.",
        type: "Tablet",
        directions: "Take 1 tablet by mouth as needed for pain relief.",
        times: ["As needed"],
        possibleSideEffects: ["Upset stomach", "Allergic reactions"],
        dosage: "1 tablet",
        frequency: "As needed",
        frequencyType: "times",
        duration: "2 weeks",
        contraindications: ["Allergic to paracetamol or other pain relievers"],
        interactions: ["Avoid taking with other medications containing paracetamol"],
        otherInformation: "Do not exceed the recommended dose.",
      },
      {
        name: "Omeprazole 20mg Capsule",
        reason: "To reduce stomach acidity.",
        type: "Capsule",
        directions: "Take 1 capsule by mouth daily in the morning before breakfast.",
        times: ["Morning"],
        possibleSideEffects: ["Nausea", "Headache"],
        dosage: "1 capsule",
        frequency: "Once a day",
        frequencyType: "times",
        duration: "1 month",
        contraindications: ["Allergic to omeprazole or proton pump inhibitors"],
        interactions: ["Consult a doctor before taking with other medications"],
        otherInformation: "Swallow the capsule whole, do not crush or chew.",
      },
      {
        name: "Ibuprofen Gel 5%",
        reason: "For topical relief of muscle pain.",
        type: "gel",
        directions: "Apply a thin layer to the affected area up to 4 times a day.",
        times: ["As needed"],
        possibleSideEffects: ["Skin irritation", "Rash"],
        dosage: "As needed",
        frequency: "As needed",
        frequencyType: "times",
        duration: "2 weeks",
        contraindications: ["Allergic to ibuprofen or NSAIDs"],
        interactions: ["Avoid using with other topical products on the same area"],
        otherInformation: "For external use only.",
      },
    ],
  },
  {
    id: 3,
    name: "Jane Smith",
    dateOfBirth: "12 October 1978",
    dateOfIssue: "5 April 2022",
    medicationsData: [
      {
        name: "Lisinopril 10mg Tablet",
        reason: "To control high blood pressure.",
        type: "Tablet",
        directions: "Take 1 tablet by mouth daily in the morning.",
        times: ["Morning"],
        possibleSideEffects: ["Dizziness", "Dry cough"],
        dosage: "1 tablet",
        frequency: "Once a day",
        frequencyType: "times",
        duration: "3 months",
        contraindications: ["Allergic to lisinopril or ACE inhibitors"],
        interactions: ["Avoid taking with potassium supplements"],
        otherInformation: "Check blood pressure regularly.",
      },
      {
        name: "Simvastatin 20mg Tablet",
        reason: "For cholesterol management.",
        type: "Tablet",
        directions: "Take 1 tablet by mouth in the evening.",
        times: ["Evening"],
        possibleSideEffects: ["Muscle pain", "Liver problems"],
        dosage: "1 tablet",
        frequency: "Once a day",
        frequencyType: "times",
        duration: "6 months",
        contraindications: ["Allergic to simvastatin or statins"],
        interactions: ["Avoid grapefruit and grapefruit juice"],
        otherInformation: "Avoid alcohol while taking this medication.",
      },
      {
        name: "Metformin 500mg Tablet",
        reason: "To manage type 2 diabetes.",
        type: "Tablet",
        directions: "Take 1 tablet by mouth twice a day with meals.",
        times: ["Morning", "Evening"],
        possibleSideEffects: ["Nausea", "Diarrhea"],
        dosage: "1 tablet",
        frequency: "Twice a day",
        frequencyType: "times",
        duration: "12 months",
        contraindications: ["Severe kidney or liver disease"],
        interactions: ["Consult a doctor before taking with other medications"],
        otherInformation: "Monitor blood sugar levels regularly.",
      },
    ],
  },
  // Add more patients to the array if needed
];

console.log(patientsData);

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
