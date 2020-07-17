import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

function SuggestionListLayout(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 2,
  },
  title: {
    color: '#125487',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
  }
})

export default SuggestionListLayout
