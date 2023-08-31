import { Clinic } from './clinic.interface';
import { Doctor } from './doctor.interface';
import { Patient } from './patient.interface';
import { Services } from './services.interface';
import { Specialty } from './specialty.interface';

export interface Appointment {
  specialty: Specialty;
  service: Services;
  doctor: Doctor;
  clinic: Clinic;
  date: Date | null;
  timeSlot: string;
  patientData: Patient;
  extraDetails: {
    comment: string;
    file: {
      name: string;
      url: string;
    };
  };
  // cancelled: true
}
