import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView, //Para area segura
} from 'react-native';

function Header(props) {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
          />
          <View style={styles.right}>
            {props.children}
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
    width: 125,
    height: 50,
  },

  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },

  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})


export default Header;
