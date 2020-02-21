import * as mongoose from 'mongoose';
import * as is from 'is_js';

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
    type: Object,
    ref: 'Specialties',
    required: true
  },
  projectedStartDate: {
    type: Date,
    default: new Date(),
    required: true
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
    ],
    required: true
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
    ],
    required: true
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
    required: true,
    default: 'AWAITING_CREDENTIALS'
  },
  employerId: {
    type: Number,
    required: true
  },
  assignedTo: {
    type: Number,
    required: () => is.existy(this.employerId)
  },
  createdBy: {
    type: Number,
    required: true
  },
  updatedBy: {
    type: Number,
    required: true
  },
  profilePhoto: {
    type: Object
  },
  state: {
    type: String,
    enum: ['DONE', 'PENDING'],
    default: () => (this.projectedStartDate > new Date())? 'PENDING': 'DONE'
  }
}, { 
  collection: 'providers',
  timestamps: {
    createdAt: 'created_at', 
    updatedAt: 'updated_at',
  }
});
