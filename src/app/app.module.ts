import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { PeopleComponent } from './people/people.component';

// Angular adds the appId value (which can be any string) to the style-names of the server-rendered pages, 
// so that they can be identified and removed when the client app starts.
//You can get runtime information about the current platform and the appId by injection.

// import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';

// constructor(
//   @Inject(PLATFORM_ID) private platformId: Object,
//   @Inject(APP_ID) private appId: string) {
//   const platform = isPlatformBrowser(platformId) ?
//     'in the browser' : 'on the server';
//   console.log(`Running ${platform} with appId=${appId}`);
// }

@NgModule({
  declarations: [
    AppComponent,
    SuggestionsComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
