import React from 'react';
import Navbar from './Navbar';
import AddBookmark from './AddBookmark';
import Bookmarks from './Bookmarks';

export default class BookmarkerApp extends React.Component{
    state = {
        bookmarks: [],
    }

    addBookmark = (bookmark) => {
        this.setState(prevState => ({
            bookmarks: prevState.bookmarks.concat(bookmark)
        }));
    }

    removeBookmark = bookmarkToDelete => {
        this.setState(prevState => ({
            bookmarks: prevState.bookmarks.filter(bookmark => bookmark !== bookmarkToDelete)
        }));
    }

    componentDidMount(){
        try {
            const storage = localStorage.getItem('bookmarks');
            const bookmarks = JSON.parse(storage);

            if(bookmarks){
                this.setState(() => ({ bookmarks }));
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState){
        const bookmarks = JSON.stringify(this.state.bookmarks);
        localStorage.setItem('bookmarks', bookmarks);
    }


    render(){
        return (
            <div>
                <Navbar />
                <div className="container mt-5">
                    <AddBookmark addBookmark={this.addBookmark} />
                    <Bookmarks 
                        bookmarks={this.state.bookmarks}
                        removeBookmark={this.removeBookmark}
                    />
                </div>
            </div>
        )
    }
}