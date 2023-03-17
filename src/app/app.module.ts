import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { ProjectsComponent } from './projects/projects.component';
import { ParticipantComponent } from './participant/participant.component';






@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ParticipantComponent,
    ShoppingCardComponent,



  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
