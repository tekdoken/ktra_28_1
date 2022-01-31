import {Component, OnInit} from '@angular/core';
import {BookService} from "../../service/book.service";
import {Book} from "../../model/book";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
books:Book[]=[]
  constructor(private service: BookService) {
  }

  ngOnInit(): void {
  this.list()
  }

  list() {
    this.service.getAll().subscribe(r => {
      this.books=r;
    })
  }
}
