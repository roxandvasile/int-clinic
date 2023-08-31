export interface Doctor {
  id?: string;
  uid?: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  phone: string;
  adress: string;
  email: string;
  gender?: string;
  password: string;
  invalidDates?: string[];
  imageUrl: string;
  specialtyIds: string[];
  description: string;
  assignedSpecialties?: string[];
  role?: string;
}
