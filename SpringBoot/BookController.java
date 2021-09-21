package com.bt.bookstore;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200/", maxAge = 3600)
@RestController

public class BookController {
	private ArrayList<Book> books = new ArrayList<Book>();
	
	@PostMapping("addBook")
	public Status addBook(@RequestBody Book newbook)
	{
		books.add(newbook);
		Status bookstatus= new Status();
		bookstatus.setCode("Success");
		bookstatus.setDescription("The book has been successfully added");
		return bookstatus;
	}
	
	@GetMapping("getBooks")
	public List<Book> getBooks()
	{	
		return books;

	}
}
