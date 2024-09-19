import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen = () => {
  const [isReminderEnabled, setIsReminderEnabled] = useState(false);
  const [reminderTime, setReminderTime] = useState("12:00");

  // This function would be replaced by actual navigation to a time picker or modal
  const handleTimePress = () => {
    // Placeholder to simulate changing the time
    setReminderTime("13:00"); // Simulate setting time after picking
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.username}>John Doe</Text>
      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Learning reminders</Text>
        <Switch
          value={isReminderEnabled}
          onValueChange={setIsReminderEnabled}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isReminderEnabled ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
      {isReminderEnabled && (
        <TouchableOpacity onPress={handleTimePress}>
          <Text style={styles.settingLabel}>
            Repeat everyday at: <Text style={styles.timeText}>{reminderTime}</Text>
          </Text>
        </TouchableOpacity>
      )}
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
    marginBottom: 40,
  },
  username: {
    fontSize: 16,
    color: '#000',
    marginBottom: 30,
    alignSelf: 'center',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingLabel: {
    fontSize: 16,
    color: '#000',
  },
  timeText: {
    fontWeight: '600',
    color: '#000',
  },
});

export default SettingsScreen;
