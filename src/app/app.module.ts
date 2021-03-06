import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BooksListComponent } from './book/books-list/books-list.component';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookCreateComponent,
    BookDetailComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
