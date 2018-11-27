export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;

  //calculateDiscount(percent: number): number;
}


////If need business object with functionality create class implementing interface
//export class Product implements IProduct {
//  constructor(
//    public productId: number,
//    public productName: string,
//    public productCode: string,
//    public releaseDate: string,
//    public price: number,
//    public description: string,
//    public starRating: number,
//    public imageUrl: string, ) { }

//  calculateDiscount(percent: number): number {
//    return (this.price * percent / 100);
//  }
//}
