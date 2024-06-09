import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard';

const MyBookShelf = () => {
    const [mybooks, setMyBooks] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("mybooks")) {
            setMyBooks(JSON.parse(localStorage.getItem("mybooks")));
        }
    }, [])

    return (
        <>
            <div className='mybookshelf'>
                <h2>MyBookShelf</h2>
                <div className='book-items'>
                    {mybooks &&
                        mybooks.map((book, index) => {
                            return <BookCard title={book.title} edition_count={book.edition_count} id={book.id} key={book.id} mybooks={mybooks} setMyBooks={setMyBooks} />
                        })
                    }
                    {
                        mybooks.length === 0 &&
                        <div className='no-books' >
                            <img src="book.png" alt="No books found" />
                            <h2>No Books Found</h2>
                        </div>

                    }
                </div>
            </div>
        </>
    )
}

export default MyBookShelf