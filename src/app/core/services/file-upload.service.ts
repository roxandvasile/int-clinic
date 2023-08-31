import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private afStorage: AngularFireStorage) {}

  uploadFile(file: File, pathName: string): Observable<string> {
    const filePath = `${pathName}/` + file.name;
    const fileRef = this.afStorage.ref(filePath);
    const task = this.afStorage.upload(filePath, file);

    return from(task).pipe(switchMap(() => fileRef.getDownloadURL()));
  }
}
