import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    handleOnSearchSubmit(term){
        //console.log(term)
    }

    render() {
        return (
            <>
                <div className="ui container" style={{ marginTop: '10px' }}>
                    <SearchBar onSubmit={this.handleOnSearchSubmit} />
                </div>
                
                <ImageList />
            </>
        )
    }
}

export default App;
