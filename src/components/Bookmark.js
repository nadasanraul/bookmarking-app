import React from 'react';

const Bookmark = props => (
    <div className="card text-white bg-success mb-3">
        <div className="card-body d-flex flex-row justify-content-between">
            <a href={props.bookmark.url} className="text-white"><h4 className="card-text">{props.bookmark.name}</h4></a>
            <button 
                onClick={e => {
                    props.removeBookmark(props.bookmark)
                }} 
                className="btn btn-danger">
                Remove
            </button>
        </div>
    </div>
)

export default Bookmark;