import axios from 'axios';

import { expo } from '../../app.json'; 

const {YOUTUBE_API_KEY} = expo.sec_data

// Define the Video type based on the YouTube API response
export interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: { medium: { url: string } };
    publishedAt: string;
  };
}

export const searchVideos = async (searchTerm: string): Promise<Video[]> => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      q: searchTerm,
      part: 'snippet',
      maxResults: 1,
      key: YOUTUBE_API_KEY,
    },
  });
  return response.data.items as Video[];
};

export const getVideosByCategory = async (category: string): Promise<Video[]> => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      q: category,
      part: 'snippet',
      maxResults: 1,
      key: YOUTUBE_API_KEY,
    },
  });
  return response.data.items as Video[];
};
