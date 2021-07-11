import {Component, OnInit} from '@angular/core';
import {Book} from './book/Book';
import {BookService} from './book/book-service.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'BookManagement';
  public books: Book[] | undefined;
  
}
