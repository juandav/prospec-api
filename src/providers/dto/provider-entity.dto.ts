import { Document } from 'mongoose';

export class ProviderEntityDto extends Document {
  email: string;
  firstName: string;
  lastName: string;
  specialty: object;
  projectedStartDate: Date;
  providerType: string;
  staffStatus: string;
  status: string;
  employerId: number;
  assignedTo: number;
  createdBy: number;
  updatedBy: number;
  profilePhoto: {
    data: Buffer,
    contentType: string
  };
  state: string;
}
