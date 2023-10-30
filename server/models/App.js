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
    enum: ["id card-renewal", "record update", "add a dependent"]
  },
  category: {
    type: String,
    required: true,
    enum: ["CAC", "NEXTGEN", "BOTH"]
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
