// books.controller.ts

import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { BooksService } from './book.service';
import { Book } from './book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.booksService.getAllBooks();
  }

  @Get(':id')
  async getBookById(@Param('id') id: string): Promise<Book> {
    return this.booksService.getBookById(id);
  }

  @Post()
  async addBook(@Body() book: Book) {
    return await this.booksService.addBook(book);
  }

  @Put(':id')
  async updateBook(
    @Param('id') id: string,
    @Body() updatedBook: Partial<Book>,
  ): Promise<void> {
    await this.booksService.updateBook(id, updatedBook);
  }
  @Post(':id/issue/:userId')
  async issueBook(@Param('id') id: string, @Param('userId') userId: string) {
    return await this.booksService.issueBook(id, userId);
  }

  @Post(':id/return')
  async returnBook(@Param('id') id: string) {
    return await this.booksService.returnBook(id);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string): Promise<void> {
    await this.booksService.removeBook(id);
  }
}
