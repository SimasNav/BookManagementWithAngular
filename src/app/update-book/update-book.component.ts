import { Component, OnInit } from '@angular/core';

import { Book} from '../book/Book';
import { BookService } from '../book/book-service.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {

  id: number | undefined;
  book: Book = new Book();
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    // @ts-ignore
    this.bookService.getBookById(this.id).subscribe((data: Book) => {
      this.book = data;
    }, (error: any) => console.log(error));
  }

  goToBookList() {
    this.router.navigate(['/books']);
  }

  onSubmit(){
    // @ts-ignore
    this.bookService.updateBook(this.id, this.book).subscribe(data => {
      this.goToBookList();
    });
  }
}
