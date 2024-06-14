// books.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>,
  ) {}

  async getAllBooks(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  async getBookById(id: string): Promise<Book> {
    return this.booksRepository.findOne(id as any);
  }

  async addBook(book: Book) {
   return await this.booksRepository.insert(book);
  }

  async updateBook(id: string, updatedBook: Partial<Book>): Promise<void> {
    await this.booksRepository.update(id, updatedBook);
  }

  async removeBook(id: string): Promise<void> {
    await this.booksRepository.delete(id);
  }

  async issueBook(id: string, userId: string){
    return await this.booksRepository.update(id, {available : false, issuedTo : userId})
  }
  async returnBook(id: string){
    return await this.booksRepository.update(id, {available : true, issuedTo : ""})
  }
}
