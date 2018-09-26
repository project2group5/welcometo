import { Injectable } from '@angular/core';
import { Person } from './models';
import { PEOPLE } from './mock-people';
import { Recommendation } from './models';
import { RECOMMENDATIONS } from './mock-people';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() {
  }

  getRec(): Observable<Recommendation[]> {
    return of(RECOMMENDATIONS);
  }

  getRecs(id: number): Observable<Recommendation> {
    return of(RECOMMENDATIONS.find(p => p.person === Person.name));
  }

  getPeople(): Observable<Person[]> {
    return of(PEOPLE);
  }

  getPerson(id: number): Observable<Person> {
    return of(PEOPLE.find(p => p.id === id));
  }
}
