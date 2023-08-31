export interface Clinic {
  id?: string;
  name: string;
  phone: number;
  email: string;
  address: string;
  description: string;
  imageUrl: string;
  doctorIds?: string[];
  specialtyIds?: string[];
  patientIds?: string[];
  assignedSpecialties?: string[];
  assignedDoctors?: string[];
}
