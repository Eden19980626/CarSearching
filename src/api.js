import axios from 'axios';

const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID sDJmW-YAEk_BDWBFss3x8qbmwzTmRFdwWlxPuOr8XYo',
    },
    params: {
      query: 'cars',
    },
  });

  console.log(response);
  return response;
};

export default searchImages;
