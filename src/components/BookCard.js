import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

const BookCard = ({ title, edition_count, setMyBooks, mybooks, id }) => {

    const location = useLocation();

    useEffect(() => {

    }, [location])

    const AddBookInMyShelf = () => {
        const mybooks = JSON.parse(localStorage.getItem("mybooks")) || [];
        localStorage.setItem("mybooks", JSON.stringify([...mybooks, { id: Date.now(), title, edition_count }]));
        toast.success("Added to Your Bookshelf")
    }

    const RemoveBookfromMyShelf = (id) => {
        if (localStorage.getItem("mybooks")) {
            const mybooks = JSON.parse(localStorage.getItem("mybooks")).filter((book) => book.id !== id);
            setMyBooks(mybooks);
            localStorage.setItem("mybooks", JSON.stringify(mybooks));
            toast.success("Removed from Your Bookshelf");
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
                {location.pathname !== '/' && <button className='btn-remove' onClick={() => { RemoveBookfromMyShelf(id) }}>Remove</button>}
            </div>
        </>
    )
}

export default BookCard