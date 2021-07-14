import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookListComponent} from '../book-list/book-list.component';
import { Book } from '../book/Book';
import { BookService } from '../book/book-service.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {

  searchTitle: string | undefined;

  books: Book[] | undefined;
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    // @ts-ignore
    this.bookService.getBooksByTitle(this.searchTitle).subscribe(data => this.books = data);
  }

  updateBook(id: number){
    this.router.navigate(['update-book', id]);
  }

  deleteBook(id: number){
    this.bookService.deleteBook(id).subscribe(data => {
      this.getSearchBooks();
      this.goToSearchBooks();
    });
  }


  getSearchBooks(){
    // @ts-ignore
    this.bookService.getBooksByTitle(this.searchTitle).subscribe(data => this.books = data);
  }
  goToSearchBooks(){
    this.router.navigate(['/search-book']);
  }

}
