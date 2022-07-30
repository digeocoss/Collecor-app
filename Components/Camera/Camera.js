import { Camera } from "expo-camera";
import * as MediaLibary from "expo-media-library";
import { StyleSheet, Text, View, Button, SafeAreaView, ImageBackgroundComponent, Image  } from 'react-native';
import { useState, useRef, useEffect } from "react";
import { shareAsync } from "expo-sharing";

export default function CameraUse () {
    let cameraRef = useRef();
    const [ AllowCamera, setAllowCamera ] = useState();
    const [ AllowMedia, setAllowMedia ] = useState();
    const [ photo, setPhoto ] = useState();
    
    useEffect(()=>{
        (async ()=>{
            const cameraPer = await Camera.requestCameraPermissionsAsync();
            const mediaPer = await MediaLibary.requestPermissionsAsync();
            setAllowCamera (cameraPer.status == "granted");
            setAllowMedia ( mediaPer.status == "granted");
        })();
    }, []);

    if (AllowCamera === undefined ) {
        return <Text> Requesting permision </Text>
    } else if(!AllowCamera) {
        return <Text>Permision pr camera not granted please change settings</Text>
    }
    
    let TakePicture = async () => {
        let options = {
            quality: 1,
            base64: true,
            exif: false
        }

        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto );
    };
        if (photo) {
            let sharePicture = () => {
                shareAsync(photo.uri).then(() => {
                    setPhoto(undefined);
                   
                })
            };

            let savePhoto = () => {
                MediaLibary.saveToLibraryAsync(photo.uri).then(() =>{
                    setPhoto(undefined)
                })
            };

            return(
                <SafeAreaView style={styles.container}>
                    <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64}} />
                    <Button title="share" onPress={sharePicture } /> 
                    {AllowMedia ? <Button title="save" onPress={savePhoto } /> : undefined }
                    <Button title="discard" onPress={()=> setPhoto(undefined ) } />
                </SafeAreaView>
            );
        }
    
    return (
        <Camera style={styles.container} ref={cameraRef }>
          <View style={ styles.buttonContainer }>
            <Button style={styles.picButt} title="Take picture" onPress={TakePicture}/>
            </View>
        
        </Camera>
      );
}



const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    BackgroundColor: '#fff',
    alingSelf: 'flex-end',
    color: "red",
},
preview: {
    alignSelf: 'stretch',
    flex: 1
}
})


