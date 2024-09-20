export interface Review {
    id: string;
    username: string;
    rating: number;
    description: string;
  }
  
  export interface Image {
    url: string;
    alt: string;
  }
  
  export interface ProductType { 
    id: string;
    title: string;
    description: string;
    price: number;
    discountedPrice: number;
    image: Image;
    rating: number;
    tags: string[];
    reviews: Review[];
  }