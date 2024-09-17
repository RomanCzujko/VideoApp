import React, { useRef, useEffect } from 'react';
import {
 View,
 Text,
 StyleSheet,
 TouchableOpacity,
 Animated,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../navigation/types';
import Logo from 'assets/svg/logo';
import PlayIcon from 'assets/svg/play-icon';

type LoginScreenNavigationProp = NativeStackNavigationProp<
 StackParamList,
 'Login'
>;

interface Props {
 navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
 const bounceValue = useRef(new Animated.Value(1)).current;
 const rotateValue = useRef(new Animated.Value(0)).current;

 useEffect(() => {
  const animation = Animated.sequence([
   Animated.parallel([
    Animated.timing(bounceValue, {
     toValue: 1.8,
     duration: 300,
     useNativeDriver: true,
    }),
    Animated.timing(rotateValue, {
     toValue: 1,
     duration: 300,
     useNativeDriver: true,
    }),
   ]),
   Animated.parallel([
    Animated.timing(bounceValue, {
     toValue: 1,
     duration: 300,
     useNativeDriver: true,
    }),
    Animated.timing(rotateValue, {
     toValue: 0,
     duration: 300,
     useNativeDriver: true,
    }),
   ]),
  ]);

  animation.start();
 }, [bounceValue, rotateValue]);

 const rotateInterpolate = rotateValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '15deg'],
 });

 const handleLoginAsGuest = () => {
  navigation.replace('MainTabs');
 };

 return (
  <View style={styles.container}>
   {/* Animated Logo */}

   <Logo />

   {/* Icon */}
   <View style={styles.iconContainer}>
    <Animated.View
     style={[
      styles.logoContainer,
      { transform: [{ scale: bounceValue }, { rotate: rotateInterpolate }] },
     ]}
    >
     <PlayIcon />
    </Animated.View>
   </View>

   {/* Welcome Text */}
   <Text style={styles.welcomeText}>
    Welcome to the best YouTube-based learning application.
   </Text>

   {/* Login Button */}
   <TouchableOpacity onPress={handleLoginAsGuest} style={styles.loginButton}>
    <Text style={styles.loginButtonText}>Log in as guest</Text>
   </TouchableOpacity>

   {/* Footer */}
   <View style={styles.footerContainer}>
    <Text style={styles.footerText}>
     By continuing you agree with{'\n'}
     <Text style={styles.footerLink}>Terms and Conditions</Text> and{' '}
     <Text style={styles.footerLink}>Privacy Policy</Text>
    </Text>
   </View>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#8D99AE',
  paddingHorizontal: 30,
  paddingTop: 100,
  paddingBottom: 80,
 },
 logoContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 30,
 },
 iconContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },
 welcomeText: {
  fontSize: 22,
  fontWeight: '600',
  color: '#fff',
  textAlign: 'left',
  marginBottom: 20,
  width: '100%',
 },
 loginButton: {
  backgroundColor: '#2B2D42',
  paddingVertical: 12,
  width: '100%',
  borderRadius: 12,
 },
 loginButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
  textAlign: 'center',
 },
 footerContainer: {
  position: 'absolute',
  bottom: 20,
  left: 30,
  right: 30,
  alignItems: 'center',
 },
 footerText: {
  fontSize: 12,
  color: '#fff',
  textAlign: 'center',
  marginTop: 20,
 },
 footerLink: {
  textDecorationLine: 'underline',
  color: '#2B2D42',
 },
});

export default LoginScreen;
