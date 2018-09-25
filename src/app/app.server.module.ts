//The app server module class (conventionally named AppServerModule) is an Angular module that 
//wraps the application's root module (AppModule) so that Universal can mediate between your 
//application and the server. AppServerModule also tells Angular how to bootstrap your application 
//when running as a Universal app.

import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
 
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
 
@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule
  ],
  providers: [
    // Add universal-only providers here
  ],
  bootstrap: [ AppComponent ],
})
export class AppServerModule {}