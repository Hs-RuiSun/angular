import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from "./event/event.component";
import { AppFormComponent } from "./form/app-form.component";
import { DashboardComponent } from "./heroes/dashboard.component";
import { HeroesGetComponent } from './heroes/heroes-get.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesSearchComponent } from "./heroes/heroes-search.component";
import { InMemoryDataService } from './in-memory-data.service';
import { HeroService } from './hero.service';
import { PostComponent } from "./http/post.component";
import { InteractionChildComponent } from "./template-syntax/interaction-child.component";
import { InteractionSetterComponent } from "./template-syntax/interaction-setter.component";
import { InteractionVoterComponent } from "./template-syntax/interaction-voter.component";
import { InteractionComponent } from "./template-syntax/interaction.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesGetComponent,
    DashboardComponent,
    HeroesSearchComponent,
    PostComponent,
    EventComponent,
    AppFormComponent,
    InteractionChildComponent,
    InteractionComponent,
    InteractionSetterComponent,
    InteractionVoterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false, passThruUnknownUrl: false, apiBase: 'api/'})
  ],
  providers: [HeroService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
