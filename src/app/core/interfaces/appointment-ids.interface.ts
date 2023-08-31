import { Patient } from './patient.interface';

export interface AppointmentIds {
  clinicId: string;
  date: Date | null;
  doctorId: string;
  patient: Patient;
  serviceId: string;
  specialtyId: string;
  timeSlot: string;
  extraDetails: object;
  localDate?: string;
}
