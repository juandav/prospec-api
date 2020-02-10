import * as mongoose from 'mongoose';

export const SpecialtiesSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    required: true,
  },
  createdBy: {
    type: Number,
    required: false,
  },
  updatedBy: {
    type: Number,
    required: false,
  }
}, { 
  collection: 'specialties',
  timestamps: {
    createdAt: 'created_at', 
    updatedAt: 'updated_at',
  }
});
