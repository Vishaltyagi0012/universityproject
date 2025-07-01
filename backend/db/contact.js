

import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
    subject: String,
    address: String
});

const user = mongoose.model("contact", contactSchema);
export default user;