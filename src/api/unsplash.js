import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          'Client-ID b4PL6HRRjSKP8br3QUIkaaGiDO7AN5yJ_UkMvrO_918',
      },
})
