require("dotenv").config();
const mongoose = require("mongoose");

const hospitals = require('./hospitals.json');
const HospitalModel = require('../models/hospitalModel');

if (!process.env.DATA_BASE) {
    console.error("Missing MONGO_URL environment variable");
    process.exit(1); // exit the current program
}

const populateHospitals = async () => {
    await HospitalModel.deleteMany({});
  
    const addHospitals = hospitals.map((hospital) => ({
        name: hospital.name,
        address: hospital.address,
        country: hospital.country,
        VAT: hospital.VAT
    }));
  
    await HospitalModel.create(addHospitals);
    console.log("Hospitals created");
};

const main = async () => {
    await mongoose.connect(process.env.DATA_BASE);
  
    await populateHospitals()
  
    await mongoose.disconnect();
  };
  
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });