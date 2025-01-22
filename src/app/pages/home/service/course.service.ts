import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ISecondaryCourse } from '../interfaces/Course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private http: HttpClient = inject(HttpClient);

  private api_url: string = environment.base_url + 'secondarycourses';

  getAllCourses(): Observable<ISecondaryCourse[]> {
    return this.http.get<ISecondaryCourse[]>(this.api_url);
  }

  getCourseById(id: number): Observable<ISecondaryCourse> {
    return this.http.get<ISecondaryCourse>(`${this.api_url}/${id}`);
  }
}
