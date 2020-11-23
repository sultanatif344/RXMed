import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { RxSearchComponent } from './rxsearch/rxsearch.component';
import { RxgridComponent } from './rxgrid/rxgrid.component';

import { RxConfigService } from './rxconfig.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
      RxSearchComponent,
      RxgridComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    AutocompleteLibModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [RxConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
