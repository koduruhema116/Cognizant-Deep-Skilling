package com.library.service;

import com.library.repository.BookRepository;

public class BookService2 {
    private BookRepository bookRepository;

    // Setter for Dependency Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayService() {
        System.out.println("Book Service Bean Created");
        bookRepository.displayRepository();
    }
}
