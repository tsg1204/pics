import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    async handleOnSearchSubmit(term){
        //console.log(term)
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
              Authorization:
                'Client-ID b4PL6HRRjSKP8br3QUIkaaGiDO7AN5yJ_UkMvrO_918',
            },
          });

          console.log(response.data.results)
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
