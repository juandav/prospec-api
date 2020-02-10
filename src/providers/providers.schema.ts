import * as mongoose from 'mongoose';

export const ProvidersSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  specialty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Specialty'
  },
  projectedStartDate: {
    type: Date,
    default: new Date()
  },
  providerType: {
    type: String,
    enum: [
      'APRN',
      'ARNP',
      'CNS',
      'CRNA',
      'DC',
      'DDS',
      'DMD',
      'DO',
      'DPM',
      'LCMFT',
      'LCMHC',
      'LCP',
      'LCPC',
      'MD',
      'NP',
      'PA'
    ]
  },
  staffStatus: {
    type: String,
    enum: [
      'ACTIVE',
      'AFFILIATE',
      'ASSOCIATE',
      'COMMUNITY',
      'CONSULTING',
      'COURTESY',
      'FACULTY',
      'HONORARY',
      'HOSPITALIST',
      'HAUSE_STAFF',
      'LOCUM_TENENS',
      'PROVISIONAL',
      'RESIDENT',
      'TEACHING'
    ]
  },
  status: {
    type: String,
    enum: [
      'AWAITING_CREDENTIALS',
      'READY_FOR_REVIEW',
      'UNDER_REVIEW',
      'AWAITING_DECISION',
      'APPROVED',
      'DENIED'
    ],
    default: 'AWAITING_CREDENTIALS'
  },
  employerId: {
    type: Number,
    required: true
  },
  assignedTo: {
    type: Number,
    required: true
  },
  createdBy: {
    type: Number,
    required: true
  },
  updatedBy: {
    type: Number,
    required: true
  }
}, { 
  collection: 'providers',
  timestamps: {
    createdAt: 'created_at', 
    updatedAt: 'updated_at',
  }
});
