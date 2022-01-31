import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksListComponent} from "./book/books-list/books-list.component";
import {BookCreateComponent} from "./book/book-create/book-create.component";

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent
    // , children: [{
    //   path: 'create',
    //   component: BookCreateComponent
    // }]
  },  {
    path: 'create',
    component: BookCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
