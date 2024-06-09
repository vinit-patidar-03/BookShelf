import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';
import Spinner from '../components/Spinner';

const Home = () => {
    const [search, setSearch] = useState("");
    const [finalInput, setFinalInput] = useState(localStorage.getItem("lastsearch") && JSON.parse(localStorage.getItem("lastSearch")));
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchBooksData = useCallback(async () => {
        setLoading(true);
        setSearch(finalInput);
        const { data } = await axios.get(`https://openlibrary.org/search.json?q=${finalInput}&limit=10&page=1`);
        setBooks(data.docs);
        setLoading(false);
    }, [finalInput])

    useEffect(() => {
        if (finalInput !== "") {
            fetchBooksData();
        }
    }, [fetchBooksData, finalInput])

    useEffect(() => {
        const timer = setTimeout(() => {
            setFinalInput(search);
            localStorage.setItem("lastSearch", search);
        }, 1000);
        return () => clearTimeout(timer);
    }, [search]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <div>
                <div className='search-items'>
                    <input type="search" placeholder='search books by name...' value={search} onChange={handleChange} />
                </div>
                <div className='book-items'>
                    {(books && !loading) &&
                        books.map((book) => {
                            return <BookCard title={book.title} edition_count={book.edition_count} key={book.key} />
                        })
                    }
                </div>
                {
                    (books.length === 0 && !loading) &&
                    <div className='no-books' >
                        <img src="book.png" alt="No books found" />
                        <h2>No Books Found</h2>
                    </div>

                }
                {
                    loading && <Spinner />
                }
            </div>
        </>
    )
}

export default Home