import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { RouteProp } from '@react-navigation/native';
import { StackParamList } from '../navigation/types'; 

type VideoDetailScreenRouteProp = RouteProp<StackParamList, 'VideoDetail'>;

interface Props {
  route: VideoDetailScreenRouteProp;  
}

const VideoDetailScreen: React.FC<Props>  = ({ route }) => {
  const { videoId, title, description } = route.params;

  return (
    <View>
      <Video
        source={{ uri: `https://www.youtube.com/watch?v=${videoId}` }}
        style={{ height: 300, width: '100%' }}
        controls={true}
      />
      <Text style={styles.subtitle}>Title: {title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
});

export default VideoDetailScreen;
