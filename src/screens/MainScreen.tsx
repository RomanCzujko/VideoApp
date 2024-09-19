import React, { useEffect, useState } from 'react';
import {
 View,
 ScrollView,
 StyleSheet,
 Text,
 TouchableOpacity,
 TextInput,
} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import VideoCategory from '../components/VideoCategory';
import { getVideosByCategory, Video } from '../api/youtubeApi';
import LoadingScreen from '../screens/LoadingScreen';
import ErrorScreen from '../screens/ErrorScreen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../navigation/types';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface MainScreenProps {
 navigation: NativeStackNavigationProp<StackParamList, 'MainScreen'>;
}

// Collecting all categories to avoid duplication
const categories = [
 { key: 'reactNative', title: 'React Native' },
 { key: 'react', title: 'React' },
 { key: 'typescript', title: 'Typescript' },
 { key: 'javascript', title: 'Javascript' },
];

// Fetch all categories in one request
const fetchAllVideos = async () => {
 const reactNative = await getVideosByCategory('React Native');
 const react = await getVideosByCategory('React');
 const typescript = await getVideosByCategory('Typescript');
 const javascript = await getVideosByCategory('Javascript');
 return { reactNative, react, typescript, javascript };
};

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['videos'],
    queryFn: fetchAllVideos,
  });

  const [videoData, setVideoData] = useState<Record<string, Video[]>>({});

  useEffect(() => {
    if (data) {
      setVideoData({
        reactNative: data.reactNative,
        react: data.react,
        typescript: data.typescript,
        javascript: data.javascript,
      });
    }
  }, [data]);

  const navigateToSearchScreen = (title: string, videos: Video[]) => {
    navigation.navigate('SearchScreen', { title, videos }); 
  };

  const navigateToSettigsScreen = () => {
    navigation.navigate('SettingsScreen');
  };

   // If loading, display LoadingScreen
 if (isLoading) {
  return <LoadingScreen />;
 }

 // If there's an error, display ErrorScreen
 if (isError && error instanceof Error) {
  return <ErrorScreen errorMessage={error.message} onRetry={refetch} />;
 }


  return (
    <View style={styles.container}>
      <View style={styles.inputWrp}>
        <TouchableOpacity
          onPress={() => navigateToSearchScreen('', [])} // Navigates without data for now
          style={styles.searchBarContainer}
        >
          <Text style={styles.input}>Search videos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToSettigsScreen}>
          <Ionicons name={'settings-outline'} size={32} color={'#000'} />
        </TouchableOpacity>
      </View>

      {/* Scrollable content for categories */}
      <ScrollView>
        {categories.map((category) => (
          <View key={category.key} style={styles.itemSection}>
            <VideoCategory
              title={category.title}
              videos={videoData[category.key] || []}
              onShowMore={() => {
                navigateToSearchScreen(category.title, videoData[category.key] || []); // Passing title and videos
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#FFF',
  paddingTop: 40,
 },
 searchBarContainer: {
  flex: 1,               // Takes up the remaining space
  backgroundColor: '#FFF',
  padding: 12,
  borderRadius: 18,
  borderWidth: 1,
  borderColor: '#000',
  justifyContent: 'center',  // Center text vertically
  marginRight: 10
},
 searchBar: {
  padding: 15,
  backgroundColor: '#FFF',
  borderRadius: 10,
  borderWidth: 1,
  borderColor: '#CCC',
  textAlign: 'center',
 },
 itemSection: {
  paddingTop: 0,
  borderBottomWidth: 2,
  borderBottomColor: '#2B2D42',
  paddingHorizontal: 20,
 },
 inputWrp: {
  flexDirection: 'row',  // Row layout to align items horizontally
  alignItems: 'center',  // Center items vertically
  paddingHorizontal: 20,
  paddingVertical: 10,

},

input: {
  fontSize: 14,
  color: '#777',
  
},
});

export default MainScreen;
