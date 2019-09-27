import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';


const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hello There Justin Williams</Text>
    <Button 
    onPress={() => props.navigation.navigate()}
    title="Go to Components Demo"
    />
    <TouchableOpacity onPress={() => console.log('List Pressed')}>
      <Text>Go to List Demo</Text>
      <Text>Go to List Demo</Text>
      <Text>Go to List Demo</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
