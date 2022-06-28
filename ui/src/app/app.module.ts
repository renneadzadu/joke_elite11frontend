import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListJokesComponent } from './list-jokes/list-jokes.component';
import { CreateJokesComponent } from './create-jokes/create-jokes.component';
import { JokesDetailComponent } from './jokes-detail/jokes-detail.component';
import { UpdateJokesComponent } from './update-jokes/update-jokes.component';
import { DeleteJokesComponent } from './delete-jokes/delete-jokes.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListJokesComponent,
    CreateJokesComponent,
    JokesDetailComponent,
    UpdateJokesComponent,
    DeleteJokesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }