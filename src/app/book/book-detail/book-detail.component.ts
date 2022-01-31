import {Component, OnInit} from '@angular/core';
import {BookService} from "../../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../../model/book";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book = {}

  constructor(private service: BookService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get('id');
      this.service.getOne(id).subscribe(res => {
        this.book = res;
      })
    })
  }

  remote(id: any) {
    if(confirm("Are you sure to delete this book???")) {
      this.service.delete(id).subscribe(r=>{
        this.router.navigate([''])
      })
    }
  }
  edit(id:any){
    this.router.navigate(['edit/'+`${id}`])
  }
}
