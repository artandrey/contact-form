import mongoose, { Schema } from 'mongoose';

const contactFormSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
  policyAgreement: Boolean,
});

const Contacts = mongoose.model('contacts', contactFormSchema);

export default Contacts;
