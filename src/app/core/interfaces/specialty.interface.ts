export interface Specialty {
  id: string;
  name: string;
  assignedDoctors?: string[];
  serviceIds: string[];
  description: string;
}
