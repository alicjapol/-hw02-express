const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
  name: { type: String, required: [true, 'Set name for contact'] },
  email: { type: String },
  phone: { type: String },
  favorite: { type: Boolean, default: false },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Contact', contactSchema);