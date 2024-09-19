import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface ErrorScreenProps {
  errorMessage: string;
  onRetry: () => void;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({ errorMessage, onRetry }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Ups...</Text>
      <Text style={styles.text}>Error: {errorMessage}</Text>
      <Button title="Retry" onPress={onRetry} color={'#2B2D42'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  text: {
    color: 'red',
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ErrorScreen;
