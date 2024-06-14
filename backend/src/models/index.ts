// book.interface.ts

export interface Book {
    id: string;
    name: string;
    author: string;
    available: boolean;
    price: number;
    image: string;
    description: string;
  }
  
  // user.interface.ts
  
  export interface User {
    id: string;
    name: string;
    // Add any other user properties here
  }
  