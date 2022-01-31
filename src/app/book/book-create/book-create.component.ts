import {Component, OnInit} from '@angular/core';
import {BookService} from "../../service/book.service";
import {Book} from "../../model/book";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book: Book = {}

  constructor(private service: BookService, private form: FormBuilder,private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  createForm: FormGroup = this.form.group({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })
  saveBook(){
    const book=this.createForm.value;
    this.service.save(book).subscribe();
    this.router.navigate([''])
  }
}
