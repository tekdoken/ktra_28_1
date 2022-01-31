import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../../model/book";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
book:Book={}
  id:any
  constructor(private service: BookService, private form: FormBuilder,private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get('id');
      this.id=id
      this.service.getOne(id).subscribe(res => {
        this.book = res;
      })
    })
  }

  editForm: FormGroup = this.form.group({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })
updateBook(){
  const book=this.editForm.value;
  this.service.update(this.id,book).subscribe();
  this.router.navigate([''])
}
}
