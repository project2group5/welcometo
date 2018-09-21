import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from '../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: Person[];

  selectedId: number;

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.peopleService.getPeople()
      .subscribe(people => this.people = people);
  }
}
