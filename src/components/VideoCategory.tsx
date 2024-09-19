import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
interface Video {
    id: {
      videoId: string;
    };
    snippet: {
      title: string;
      thumbnails: {
        medium: {
          url: string;
        };
      };
      publishedAt: string;
    };
  }

  interface VideoCategoryProps {
    title: string;
    videos: Video[];
    onShowMore: () => void;
  }

const VideoCategory: React.FC<VideoCategoryProps> = ({ title, videos, onShowMore }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onShowMore}>
          <Text style={styles.showMore}>Show more</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={videos}
        keyExtractor={(item) => item.id.videoId}
        renderItem={({ item }) => (
          <View style={styles.videoCard}>
            <Image source={{ uri: item.snippet.thumbnails.medium.url }} style={styles.thumbnail} />
            <Text style={styles.videoTitle} numberOfLines={2}>{item.snippet.title}</Text>
            <Text style={styles.videoDate}>{item.snippet.publishedAt.substring(0, 10)}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  paddingVertical: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  showMore: {
    color: '#000',
    textDecorationLine: 'underline'
  },
  videoCard: {
    width: 180,
    marginRight: 10,
  },
  thumbnail: {
    width: '100%',
    height: 136,
    borderRadius: 8,
  },
  videoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  videoDate: {
    fontSize: 12,
    color: '#888',
    textAlign: 'right'
  },
});

export default VideoCategory;
