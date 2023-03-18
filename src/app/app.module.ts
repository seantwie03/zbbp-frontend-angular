import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MonthlyBudgetComponent} from './monthyly-budget-component/monthly-budget.component';
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [AppComponent, MonthlyBudgetComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
