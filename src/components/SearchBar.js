import React from 'react';


class SearchBar extends React.Component{
    state = {term : ''};

    OnChangeValue = (event) =>{
        this.setState({term : event.target.value})
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term); 
    }

    render(){
        return<div>
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" onChange={this.OnChangeValue}>
                        </input>
                    </div>
                </form>
            </div>
        </div>
    }
}

export default SearchBar;