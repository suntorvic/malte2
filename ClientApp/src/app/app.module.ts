import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { NavMenuComponent } from './modules/nav-menu/nav-menu.component';
import { HomeComponent } from './modules/home/home.component';
import { OperatorsComponent } from './modules/settings/operators/operators.component';
import { AccountingEntriesComponent } from './modules/settings/accounting-entries/accounting-entries.component';
import { MealsComponent } from './modules/meals/meals.component';
import { OperationsComponent } from './modules/operations/operations.component';
import { BoardersComponent } from './modules/boarders/boarders.component';
import { ListTable, ListTableColumn } from './shared/list-table/list-table.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountBooksComponent } from './modules/settings/account-books/account-books.component';
import { BoardingRoomsComponent } from './modules/settings/boarding-rooms/boarding-rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    MealsComponent,
    OperationsComponent,
    BoardersComponent,
    OperatorsComponent,
    AccountingEntriesComponent,
    ListTable,
    ListTableColumn,
    AccountBooksComponent,
    BoardingRoomsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'operations', component: OperationsComponent },
      { path: 'boarders', component: BoardersComponent },
      { path: 'meals', component: MealsComponent },
      { path: 'settings/operators', component: OperatorsComponent },
      { path: 'settings/accounting-entries', component: AccountingEntriesComponent },
      { path: 'settings/account-books', component: AccountBooksComponent },
      { path: 'settings/boarding-rooms', component: BoardingRoomsComponent },
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
