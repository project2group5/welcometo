import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../people.service';
import { Person } from '../models';
import { Recommendation } from '../models';


@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  person?: Person;
  category?: string;
  recommendation?: Recommendation;
  
  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const peopleId = +params['peopleId'];
      if (peopleId) {
        this.peopleService.getPerson(peopleId)
          .subscribe(p => this.person = p);
      } else {
        this.person = null;
      }
      this.category = params['category'];
    });
  }

  


}
