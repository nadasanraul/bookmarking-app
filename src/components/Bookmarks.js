import React from 'react';
import Bookmark from './Bookmark';

const Bookmarks = props => (
    <div>
        {props.message && <p>{props.message}</p>}
        {
            props.bookmarks.map((bookmark, index) => (
                <Bookmark 
                    key={index} 
                    bookmark={bookmark}
                    removeBookmark={props.removeBookmark}
                />
            ))
        }
    </div>
)

export default Bookmarks;