import { Component, OnInit } from '@angular/core';
import { Book } from '../book/Book';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {

  book: Book = new Book();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){}
}
