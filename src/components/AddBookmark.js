import React from 'react';

export default class AddBoomark extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();

        const bookmark = {
            name: e.target.elements.name.value.trim(),
            url: e.target.elements.url.value.trim()
        }

        e.target.elements.name.value = '';
        e.target.elements.url.value = '';


        this.props.addBookmark(bookmark);
    }

    render(){
        return (
            <div className="jumbotron">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" id="name" required></input>
                    </div>
                    <div className="form-group">
                        <label>Url</label>
                        <input type="url" name="url" className="form-control" id="url" required></input>
                    </div>
                    <div className="form-group">
                        <input type="submit" name="submit" value="Add" className="btn btn-primary btn-lg btn-block"></input>
                    </div>
                </form>
            </div>
        );
    }
}