import axios from 'axios';

const API_KEY = 'YOUR_YOUTUBE_API_KEY';

const youtubeApi = {
  searchVideos: async (searchTerm: string) => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: searchTerm,
        part: 'snippet',
        maxResults: 10,
        key: API_KEY,
      },
    });
    return response.data;
  },
};

export default youtubeApi;
