import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackParamList } from '../navigation/types';
import SearchVideo from '../components/SearchVideo';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type SearchScreenRouteProp = RouteProp<StackParamList, 'SearchScreen'>;

interface SearchScreenProps {
  navigation: NativeStackNavigationProp<StackParamList, 'VideoDetail'>;
  route: SearchScreenRouteProp;
}


const SearchScreen: React.FC<SearchScreenProps> = ({ route, navigation }) => {
  const { title, videos } = route.params; // Access the passed title and videos data

  return (
    <View style={styles.container}>
      <SearchVideo  title={title}/>
      {title && <><Text style={{paddingBottom: 10}}>Search Results for: <Text style={{fontWeight:'600'}}>{title}</Text></Text></>}
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id.videoId}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('VideoDetail', {
            videoId: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description
          })}>

          <View style={styles.videoCard}>
            <Image source={{ uri: item.snippet.thumbnails.medium.url }} style={styles.thumbnail} />
            <Text style={styles.videoTitle} numberOfLines={2}>{item.snippet.title}</Text>
            <Text style={styles.videoDesc} numberOfLines={3}>{item.snippet.description}</Text>
            <Text style={styles.videoDate}>{item.snippet.publishedAt.substring(0, 10)}</Text>
          </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 40
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
    width: '100%',
    marginRight: 10,
  },
  thumbnail: {
    height: 200,
    borderRadius: 8,
  },
  videoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  videoDesc: {
    fontSize: 14,
  },
  videoDate: {
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
    marginTop: 5,
  },
});

export default SearchScreen;
