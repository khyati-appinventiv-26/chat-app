
import React from 'react'
import {
  View,
} from 'react-native';
import RootNavigation from './src/navigator/rootNavigation';




function App(): React.JSX.Element {
 
  return (
    <View style={{flex: 1}}>
      <RootNavigation/>
    </View>
  );
}

export default App;
