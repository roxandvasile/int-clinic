import { Pipe, PipeTransform } from '@angular/core';
import { Specialty } from '../interfaces/specialty.interface';
import { Doctor } from '../interfaces/doctor.interface';
import { Services } from '../interfaces/services.interface';
import { Clinic } from '../interfaces/clinic.interface';

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  transform(unsortedArray: (Doctor | Clinic | Specialty | Services)[], searchedInput: string): any {
    const sortedArray = unsortedArray.filter((clinicEntity: Specialty | Doctor | Services | Clinic) =>
      Object.values(clinicEntity).find((attributesInEntities: any) => {
        if (typeof attributesInEntities == 'number') {
          const searchedInputToNumber = Number(searchedInput);

          return searchedInputToNumber === attributesInEntities;
        } else if (typeof attributesInEntities !== 'object') {
          const equalizedStringInEntities = attributesInEntities
            .normalize('NFD')
            .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
          const equalizedStringInSearchInput = searchedInput
            .normalize('NFD')
            .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');

          return equalizedStringInEntities.toLowerCase().includes(equalizedStringInSearchInput.toLowerCase());
        } else if (attributesInEntities === null || attributesInEntities === undefined) {
          return;
        }
        return Array.isArray(attributesInEntities) && attributesInEntities.includes(searchedInput);
      })
    );

    return sortedArray.length ? sortedArray : unsortedArray;
  }
}
