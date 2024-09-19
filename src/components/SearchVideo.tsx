import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { searchVideos, Video } from '../api/youtubeApi'; // Import the search API
import Ionicons from 'react-native-vector-icons/Ionicons';

interface SearchVideoProps {
    onSearchResults: (results: Video[]) => void; // Expected prop type
  }

const SearchVideo: React.FC<SearchVideoProps> = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState(title?title: '');

  const handleSettings = async () => {
    navigation.replace('MainTabs');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search videos"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  searchInput: {
    flex: 1,
    height: 44,
    borderColor: '#2B2D42',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default SearchVideo;
