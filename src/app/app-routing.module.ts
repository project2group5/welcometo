import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RecommendationComponent } from './recommendation/recommendation.component';

const routes: Routes = [
  { path: '', component: RecommendationComponent },
  
  { path: 'people/:peopleId', component: ProfileComponent },
  { path: 'recommendations/:category', component: RecommendationComponent },
  { path: 'people/:peopleId/recommendations/:category', component: RecommendationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
