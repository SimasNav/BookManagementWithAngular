import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book/Book';
import { BookService } from '../book/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

books: Book[] | undefined;

  constructor(private bookService : BookService, private router: Router) { }

  ngOnInit(): void {
  this.getBooks();
  }

  getBooks(){
    return this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  updateBook(id: number | undefined){
    this.router.navigate(['update-book',id]);
  }

  deleteBook(id: number | undefined) {
    // @ts-ignore
    this.bookService.deleteBook(id).subscribe(data => {
      console.log(data);
      this.getBooks();
    });
  }

}
