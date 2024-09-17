import React, { useState } from 'react';
import {
 View,
 TextInput,
 Button,
 Text,
 StyleSheet,
 TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../navigation/types';
import Logo from 'assets/svg/logo';

type LoginScreenNavigationProp = NativeStackNavigationProp<
 StackParamList,
 'Login'
>;

interface Props {
 navigation: LoginScreenNavigationProp;
}
const LoginScreen: React.FC<Props> = ({ navigation }) => {
 const handleLoginAsGuest = () => {
  // Navigate to your MainTabs or whatever is appropriate
  navigation.replace('MainTabs');
 };

 return (
  <View style={styles.container}>
   {/* Header */}
   <Text style={styles.headerText}>
    YouTube<Text style={styles.headerBold}> LEARN</Text>
   </Text>

   {/* Icon */}
   <View style={styles.iconContainer}>
    <Logo />
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
   <Text style={styles.footerText}>
    By continuing you agree with{' '}
    <Text style={styles.footerLink}>Terms and Conditions</Text> and{' '}
    <Text style={styles.footerLink}>Privacy Policy</Text>
   </Text>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#8693a5', // Light blue/gray background
 },
 headerText: {
  fontSize: 32, // Larger font size for "YouTube"
  fontWeight: 'normal',
  color: '#fff',
 },
 headerBold: {
  fontWeight: 'bold', // Bolder text for "LEARN"
 },
 iconContainer: {
  marginTop: 30,
  marginBottom: 30,
  justifyContent: 'center',
  alignItems: 'center',
 },
 icon: {
  width: 120, // Icon width
  height: 120, // Icon height
 },
 welcomeText: {
  fontSize: 16,
  fontWeight: '600',
  color: '#fff',
  textAlign: 'center',
  marginBottom: 20,
  paddingHorizontal: 20,
 },
 loginButton: {
  backgroundColor: '#353535', // Dark gray button
  paddingVertical: 15,
  paddingHorizontal: 80,
  borderRadius: 25,
  marginBottom: 20,
 },
 loginButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
 },
 footerText: {
  fontSize: 12,
  color: '#fff',
  textAlign: 'center',
  marginTop: 20,
 },
 footerLink: {
  textDecorationLine: 'underline', // Underline for "Terms and Conditions" and "Privacy Policy"
 },
});

export default LoginScreen;
