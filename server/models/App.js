import mongoose from "mongoose";

const appSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  location: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  request: {
    type: String,
    required: true,
    enum: ["renewal", "record update", "both", "other"]
  },
  category: {
    type: String,
    required: true,
    enum: [
      "Active Duty",
      "Contractor",
      "Dependent",
      "Disabled American Veteran",
      "Other"
    ]
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true,

    order: { type: mongoose.Schema.Types.ObjectId, ref: "Appointments" }
  }
});

const Appointment = mongoose.model("Appointment", appSchema);

export default Appointment;
