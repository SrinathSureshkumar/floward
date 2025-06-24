import { StyleSheet, View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

const Home = () => {
  return (
    <View style={{ flex: 1, marginVertical: 50 }}>
      <WebView 
        source={{ uri: 'https://www.qrstuff.com/scan?mode=upload' }}
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
    </View>
  );
};

export default Home;
