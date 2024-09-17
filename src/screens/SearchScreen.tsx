import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import youtubeApi from '../api/youtubeApi';  // Import YouTube API logic

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading } = useQuery({
    queryKey: ['videos', searchTerm],   // Unique key for the query
    queryFn: () => youtubeApi.searchVideos(searchTerm),  // Function that fetches data
    enabled: !!searchTerm,  // Ensures that the query is only run when there is a search term
  });
  
  return (
    <View>
      <TextInput
        placeholder="Search for videos"
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={{ padding: 10, borderWidth: 1 }}
      />
      {isLoading ? <Text>Loading...</Text> : (
        <FlatList
          data={data?.items}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }) => (
            <Text>{item.snippet.title}</Text>  // Display video titles
          )}
        />
      )}
    </View>
  );
};

export default SearchScreen;
