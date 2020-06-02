import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api/api.service";
import { BookOwner } from '../shared/book_owner';

@Component({
  selector: 'app-book-shop',
  templateUrl: './book-shop.component.html',
  styleUrls: ['./book-shop.component.css']
})
export class BookShopComponent implements OnInit {
  bookItemList = [];

  constructor(private apiClient: ApiService) { }

  ngOnInit() {
    this.onLoad();
  }

  onBuy(idBook) {
    var data: BookOwner = {
      id_book: idBook,
      token_user: localStorage.getItem("token"),
      number: 1,
      date_bought: (new Date()).toISOString()
    };
    this.apiClient.buyBook(data).subscribe((data: any) => {
      if (data.status) {
        alert("Success");
      } else {
        alert("Fail");
      }
    })
  }

  onLoad()  {
    this.apiClient.getlistBook().subscribe((data: any) => {
      this.bookItemList = data;
    })
  }

}
