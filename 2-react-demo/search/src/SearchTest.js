import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: ''
        }
    }

    render() {
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
