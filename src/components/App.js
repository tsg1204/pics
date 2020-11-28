import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    handleOnSearchSubmit(term){
        //console.log(term)
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
              Authorization:
                'Client-ID b4PL6HRRjSKP8br3QUIkaaGiDO7AN5yJ_UkMvrO_918',
            },
          });
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
