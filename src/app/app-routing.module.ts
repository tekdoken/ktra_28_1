import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksListComponent} from "./book/books-list/books-list.component";
import {BookCreateComponent} from "./book/book-create/book-create.component";
import {BookDetailComponent} from "./book/book-detail/book-detail.component";

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent
    // , children: [{
    //   path: ':id',
    //   component: BookDetailComponent
    // }]
  },  {
    path: 'create',
    component: BookCreateComponent
  },{
    path: ':id',
    component: BookDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
