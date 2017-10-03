import React, { Component } from 'react';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchString: ''
		}
	}

	_handleChange(e) {
		this.setState({
			searchString: e.target.value
		});
	}

  render() {
		let libraries = this.props.items,
		searchString = this.state.searchString.trim().toLowerCase();

		if (searchString.length > 0) {
			libraries = libraries.filter(function(l){
				return l.name.toLowerCase().match( searchString );
			});
		}

    return (
      <div className="search">
				<input type="text" value={this.state.searchString} onChange={this._handleChange.bind(this)} />
				<ul> 
						{ libraries.map(function(l){
							return <li>{l.name} <a href={l.url}>{l.url}</a></li>
						}) }
				</ul>
    	</div>
    );
  }
}

export default Search;
