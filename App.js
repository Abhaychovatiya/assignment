import React from 'react';
import { StyleSheet , SafeAreaView , Platform , StatusBar} from 'react-native';
import SearchScreen from './src/Screens/SearchScreen/index';

const app = () =>{
  return(
    <SafeAreaView style={styles.container}>
     <SearchScreen />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: Platform.OS === 'android' ? 35 : StatusBar.currentHeight === 0,
  }
});
export default app; 