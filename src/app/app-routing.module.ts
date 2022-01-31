import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksListComponent} from "./book/books-list/books-list.component";
import {BookCreateComponent} from "./book/book-create/book-create.component";
import {BookDetailComponent} from "./book/book-detail/book-detail.component";
import {BookEditComponent} from "./book/book-edit/book-edit.component";

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent
  }, {
    path: 'create',
    component: BookCreateComponent
  }, {
    path: ':id',
    component: BookDetailComponent
  }, {
    path: 'edit/:id',
    component: BookEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
