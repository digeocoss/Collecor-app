import { Camera } from "expo-camera";
import * as MediaLibary from "expo-media-library";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackgroundComponent } from 'react-native';
import { useState, useRef, useEffect } from "react";

export default function CameraUse () {
    let cameraRef = useRef();
    const [ AllowCamera, setAllowCamera ] = useState();
    const [ AllowMedia, setAllowMedia ] = useState();
    const [ Photo, setPhoto ] = useState();
    
    useEffect((async ()=>{
        const cameraPer = await Camera.requestCameraPermissionsAsync();
        const mediaPer = await MediaLibary.requestPermissionsAsync();
        setAllowCamera (cameraPer.status == "granted");
        setAllowMedia ( mediaPer.status == "granted");
    }),)
}

if (AllowCamera == undefined ) {
    return <text> Requesting permision </text>
} else if(!AllowCamera) {
    return <Text>Permision pr camera not granted please change settings</Text>
}
return (
    <Camera style={styles.container} ref={cameraRef }>
      <View style={ styles.buttonContainer }>
        <Button title="Take picture" onPress={TakePicture}/>
        </View>
      <StatusBar style="auto" />
    </Camera>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    BackgroundColor: '#fff',
    alingSelf: 'flex-end',
}
})


