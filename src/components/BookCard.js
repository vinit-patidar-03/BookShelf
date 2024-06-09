import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BookCard = ({ title, edition_count, setMyBooks }) => {

    const location = useLocation();

    useEffect(() => {

    }, [location])

    const AddBookInMyShelf = () => {
        if (localStorage.getItem("mybooks")) {
            const mybooks = JSON.parse(localStorage.getItem("mybooks"));
            localStorage.setItem("mybooks", JSON.stringify([...mybooks, { title, edition_count }]));
        }
    }

    const RemoveBookfromMyShelf = (title) => {
        if (localStorage.getItem("mybooks")) {
            const mybooks = JSON.parse(localStorage.getItem("mybooks")).filter((book) => book.title !== title);
            setMyBooks(mybooks);
            localStorage.setItem("mybooks", JSON.stringify(mybooks));
        }
    }

    return (
        <>
            <div className='book-card'>
                <div className='book-title'>
                    <p><span>Title: </span>{title}</p>
                </div>
                <div className='book-edition'>
                    <p><span>Edition Count: </span>{edition_count}</p>
                </div>
                {location.pathname === '/' && <button className='btn' onClick={AddBookInMyShelf}>Add to MyBookshelf</button>}
                {location.pathname !== '/' && <button className='btn-remove' onClick={() => { RemoveBookfromMyShelf(title) }}>Remove</button>}
            </div>
        </>
    )
}

export default BookCard