export interface IProduct {
  _id: string;
  mainImg: string;
  images: string[];
  title: string;
  description: string;
  price: number;
  newPrice: number;
  isNew?: boolean;
  category?: string;
  sizes?: string[];
  quantity?: number
}
// export interface ILinks {
//   title: string,
//   href: string
// }