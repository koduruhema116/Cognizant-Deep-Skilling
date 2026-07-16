import React from "react";

class BookDetails extends React.Component {
    render(){
        const books = [
            {
                id: 1,
                title: "React Basics",
                author: "John"
            },
            {
                id: 2,
                title: "Java Programming",
                author: "David"
            }
        ];
        return (
            <div>
                <h2>Book Details</h2>

                <ul>
                    {books.map(book => (
                        <li key={book.id}>
                            <b>{book.title}</b> - {book.author}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default BookDetails;