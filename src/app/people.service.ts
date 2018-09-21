import { Injectable } from '@angular/core';
import { Person, Recommendation } from './models';
import { PEOPLE } from './mock-people';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() {
  }

  getPeople(): Observable<Person[]> {
    return of(PEOPLE);
  }

  getPerson(id: number): Observable<Person> {
    return of(PEOPLE.find(p => p.id === id));
  }
}
