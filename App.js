'use strict';

import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const ScanScreen = () => {
  
  const [text,setText] = useState('');
  
  const onSuccess = e => {
    setText(e.data);
    ToastAndroid.show("Bir Kaç Saniye Bekleyin.", ToastAndroid.SHORT);
  };
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.topText}>Simple QRCodeScanner</Text>
          <QRCodeScanner
            onRead={(e) => onSuccess(e)}
            flashMode={RNCamera.Constants.FlashMode.auto}
            showMarker={true}
            reactivate={true} reactivateTimeout={5000}
            markerStyle={styles.markerStyle}
          />
          <Text style={styles.centerText}>
              {text}
            </Text>
        </View>
      </>
    );
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#0a043c',
    height:'100%',
    width:'100%',
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
  },
  topText: {
    fontSize:25,
    color:'#d3e0ea',
    marginBottom:150
  },
  centerText: {
    flex:1,
    marginTop:100,
    color:'#d3e0ea',
  }
});

export default ScanScreen;