import React,{useEffect} from "react";
import MapmyIndiaGL from 'mapmyindia-map-react-native-beta';
import {SafeAreaView,PermissionsAndroid} from 'react-native';
import StationMap from "./StationMap";
import CurrentLocationActivity from '../map/CurrentLocationActivity';



// MapmyIndiaGL.setMapSDKKey("886b8e770b7b5314cd9ed9e669676599");//place your mapsdkKey
// MapmyIndiaGL.setRestAPIKey("886b8e770b7b5314cd9ed9e669676599");//your restApiKey
// MapmyIndiaGL.setAtlasClientId("33OkryzDZsI7xFIhJQLRl2q-P3RvvzOAvx26YL-cjXJrPV25KVgBQoJ5azss3gOfCePom3jwKV3ojpvY7HCxPA==");//your atlasClientId key
// MapmyIndiaGL.setAtlasClientSecret("lrFxI-iSEg--udP6gtFTSw5ZbhNI6y6KalbzIvC9e0-iOYbFwOQ9iSmE7u81wysN3SWSbHF1zLEHH0bPKcFwGi7-CSJwqHvy"); //your atlasClientSecret key
//Mapmyindia.setRestApiKey("886b8e770b7b5314cd9ed9e669676599")
//Mapmyindia.setClientSecret("lrFxI-iSEg--udP6gtFTSw5ZbhNI6y6KalbzIvC9e0-iOYbFwOQ9iSmE7u81wysN3SWSbHF1zLEHH0bPKcFwGi7-CSJwqHvy")
//Mapmyindia.setClientId("33OkryzDZsI7xFIhJQLRl2q-P3RvvzOAvx26YL-cjXJrPV25KVgBQoJ5azss3gOfCePom3jwKV3ojpvY7HCxPA==")
MapmyIndiaGL.setMapSDKKey("5b4d30652d676ff6dee28095da87dda2");//place your mapsdkKey
MapmyIndiaGL.setRestAPIKey("5b4d30652d676ff6dee28095da87dda2");//your restApiKey
MapmyIndiaGL.setAtlasClientId("33OkryzDZsJaXWvFyHkQ2luIdgsoRaGsrwQuUpcZI4hvSvuv7f0KtCsJ2-YjT8B4lA3_0k5GsshAtwsZr71QyA==");//your atlasClientId key
MapmyIndiaGL.setAtlasClientSecret("lrFxI-iSEg8QI16SDWIwTd_-INO4GzBx1TPj2bOPi2ye443z-bXtUSVrJQ5ZOzst279jUhv-WfBquu9CeKl-yTgJcUfMaTb2"); //your atlasClientSecret key



const NearSwapStation = () => {
    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Cool Location Permission",
              message:
                "Loaction App needs access to your Loaction ",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the Location");
          } else {
            console.log("Location permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      };
      useEffect(()=>{
        requestCameraPermission();
      },[])
    return (
        <SafeAreaView style={{ flex: 1 }}>
              <CurrentLocationActivity/>
            <StationMap />

        </SafeAreaView>
    );
}

const styles = {
    icon: { iconAllowOverlap: true, iconSize: 0.7, },
    centerIcon: { iconAllowOverlap: true, iconSize: 0.7, },
    circle: { circleRadius: 150, circleColor: '#00953B4D', visibility: 'visible', circleOpacity: 0.4, },
    smallcircle: { circleRadius: 75, circleColor: '#00953B4D', visibility: 'visible', },
};
export default NearSwapStation