import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IProduct } from "./products";

@Injectable({ providedIn: 'root' } )
export class ProductService {
  private productUrl = 'api/products/products.json';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handelError) ); }

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find(p => p.productId === id))
    );
  }

  private handelError(err: HttpErrorResponse) {
    // in a real woreld app, we may send the server to some remote logging infrastructure
    // instead of logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or netwrok error occured.  Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  //getProducts(): IProduct[] {
  //  return [
  //    {
  //      "productId": 2,
  //      "productName": "Garden Cart",
  //      "productCode": "GDN-0023",
  //      "releaseDate": "March 18, 2016",
  //      "description": "15 gallon capacity rolling garden cart",
  //      "price": 32.99,
  //      "starRating": 4.2,
  //      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
  //    },
  //    {
  //      "productId": 5,
  //      "productName": "Hammer",
  //      "productCode": "TBX-0048",
  //      "releaseDate": "May 21, 2016",
  //      "description": "Curved claw steel hammer",
  //      "price": 8.9,
  //      "starRating": 4.8,
  //      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
  //    },
  //    {
  //      "productId": 10,
  //      "productName": "Video Game Controller",
  //      "productCode": "GMG-0042",
  //      "releaseDate": "October 15, 2015",
  //      "description": "Standard two-button video game controller",
  //      "price": 35.95,
  //      "starRating": 4.6,
  //      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
  //    }
  //  ];
  //}

}
