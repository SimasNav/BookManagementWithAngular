import {Component, OnInit} from '@angular/core';
import {Book} from "./book/Book"
import {BookService} from './book/book-service.service';
import {Router} from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BookManagement';
  public books: Book[] | undefined;

  constructor(private router: Router, private bookService: BookService) {
  }

  getBooks() {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    })
,
(error: HttpErrorResponse) =>
alert(error.message);
  }

  deleteBook(id: number){
    this.bookService.deleteBook(id).subscribe(data => {
      console.log(data);
    });
  }

  addBook(): void {
    this.router.navigate(['add-book'])
      .then((e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
  };

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.getBooks();
    });
  }
}
