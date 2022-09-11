import React, { Component } from 'react';
import { Platform, View, PermissionsAndroid, Linking } from 'react-native';
import { useEffect } from 'react';
import MapmyIndiaGL from 'mapmyindia-map-react-native-beta';
import { DEFAULT_CENTER_COORDINATE } from '../../utils/index';
import Toast from 'react-native-simple-toast';
import CustomHeader from '../../components/header';
import { useTranslation } from "react-i18next";
import { useNavigation } from '@react-navigation/native';
import circle from '@turf/circle';
import { connect } from 'react-redux';
import exampleIcon from '../../assets/marker.png';
import userMarker from '../../assets/user-marker.png';
import { postDealerDataCoordinatesApi } from '../../redux/actions/postDealerAction';
 
import { useDispatch, useSelector } from 'react-redux';

const Head = (props) => {
  useEffect(()=>{navigation.navigate("Nearest Swaping Station")},[])

  const dispatch=useDispatch();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const Back = () => {
    props.resetState()
    navigation.navigate("Home1")
  }
  const Settings = () => {
    props.resetState()
    navigation.navigate("Settings")
  } 
  const Notification = () => {
    //dispatch(IotTokendata());
    props.onRefreshCall()
  }
  const GoHome = () => {
    props.resetState()
    navigation.navigate("Home1")
  }

  return (
    <View>
      <CustomHeader
        Icons={{ home: 'home', back: 'arrow-back', refresh: 'refresh-sharp', notification: 'refresh' }}
        onPressBack={Back}
        onPressNotification={Notification}
        onPressHome={GoHome}
        onPressSetting={Settings}
        HeadingName={t('findnearests')}
        imageSize={{
          bgWidth: '110%',
          bgHeight: 40,
          lineWidth: '30%',
          lineHeight: 35,
          viewHeight: 2,
          viewWidth: '28%', marginLeft: Platform.OS == 'android' ? '-18%' : '-5%', MainImgWidth: 0, MianImageHeight: 0, VimageHeight: 0, VimageWidth: 0
        }} />
    </View>
  )
}

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

class CurrentLocationActivity extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gpsState: true,
      lat: 77.2689804,
      long: 28.5512002,
      currentLat: '',
      currentLong: '',
      placesList: '',
      visibleList: false,
      firstRender: false,
      iconName: 'list',
      locations: [],
      keyword: "coffee",
      filter: undefined,
      featureCollection: {
        type: 'FeatureCollection',
        features: [],
      },
      polygon: {
        type: 'FeatureCollection',
        features: [
        ],
      },
    };
  }

  async callNearby(latitude, longitude) {
    Toast.show('Please wait...', Toast.SHORT);
    let arr = [];
    let placeArr = [];

    console.log('props data inside callNearby is', this.props.postDealerDataCoordinates)
    const suggestedLocation = []
    for (var j = 0; j < this.props.postDealerDataCoordinates.length; j++) {
      console.log('values inside array is', this.props.postDealerDataCoordinates[j])
      let arr = [this.props.postDealerDataCoordinates[j].longitude, this.props.postDealerDataCoordinates[j].latitude]
      console.log(j)
      suggestedLocation.push(arr)
    }

    for (let i = 0; i < suggestedLocation.length; i++) {
      console.log('INSIDE FOR LOOP', suggestedLocation[i])
      arr.push({
        type: 'Feature',
        id: i,
        geometry: {
          coordinates:
            suggestedLocation[i]
          ,
          type: 'Point',
        },
      });
    }

    this.setState({
      placesList: placeArr,
      featureCollection: {
        type: 'FeatureCollection',
        features: arr,
      },
    });

    console.log("Featue collection data", this.state.featureCollection)

  }
  componentDidMount() {
    MapmyIndiaGL.locationManager.start();
    requestCameraPermission();
    // Toast.show("To get current location press my location button ", Toast.LONG);
    // Toast.show('Tap on map to get nearby ', Toast.SHORT);
    // console.log("REDUCER DATA", this.props);
  }

  onPress(event) {
    const { geometry, properties } = event;
    const longitude = geometry.coordinates[0];
    const latitude = geometry.coordinates[1];


    this.setState({
      featureCollection: {
        type: 'FeatureCollection',
        features: [],
      },
    });
    this.callNearby(latitude, longitude);
  }

  onLoad() {
   // console.log("aaaaaaaaa", event)
      this.onRefreshCall()
      this.setState({firstRender: true})
  }


  onMarkerClick(e) {
    console.log(e, '=================>');
    const f = e.nativeEvent.payload;
    console.log("marker click " + JSON.stringify(f));

        let lon = f.geometry.coordinates && f.geometry.coordinates[0] ? f.geometry.coordinates[0] : 0;
        let lat = f.geometry.coordinates && f.geometry.coordinates[1] ? f.geometry.coordinates[1] : 0;
        // console.log(lat, lon)
        if (Platform.OS === "android" || "web") {
            Linking.openURL(
                `https://www.google.com/maps/dir/?api=1&origin=` +
                this.state.currentLat +
                `,` +
                this.state.currentLong +
                `&destination=` +
                lat +
                `,` +
                lon +
                `&travelmode=driving`
            );
            } else {
                console.log("Something Went Wrong?")
            }

    // Toast.show(f.properties && f.properties.placeName ? f.properties.placeName : '', Toast.SHORT);
  }


  onfloatingButtonClick() {
    if (this.state.iconName === 'list') {
      this.setState({
        visibleList: true,
        iconName: 'map-marker',
      });
    } else if (this.state.iconName === 'map-marker') {
      this.setState({
        visibleList: false,
        iconName: 'list',
      });
    }
  }
  async onUpdate(location) {
    console.log("newe data is ",parseInt(this.props.radius))
    const { latitude, longitude, accuracy } = location.coords;
    if(this.state.currentLat !== latitude){
    this.setState({currentLat: latitude, currentLong: longitude})
    }
    MapmyIndiaGL.RestApi.reverseGeocode({ latitude: latitude, longitude: longitude })
      .then(response => {
        if (response.responseCode === 200) {
          global.myLocatData = `${response.results[0].formatted_address}`
        }
      })
      .catch(error => console.log(error.code, error.message));
      console.log(this.state.firstRender,"aaa" )
    if(!this.state.firstRender){
      this.camera.moveTo([longitude, latitude]);
      this.camera.zoomTo(11, 1000);
    }
      this.setState({
        polygon: {
          type: 'FeatureCollection',
          features: [
            circle([location.coords.longitude, location.coords.latitude], parseInt(this.props.radius) * 1000, { steps: 1000, units: 'meters' }),
            circle([location.coords.longitude, location.coords.latitude], (parseInt(this.props.radius)+ 1) * 1000, { steps: 1000, units: 'meters' }),
          ],
        },
      },
      )
    
    this.props.postDealerDataCoordinatesApi(location.coords)
  }
  callNearbyUpd(val) {
    let arr = [];
    const suggestedLocation = []
    for (var j = 0; j < val.length; j++) {
      console.log('values inside array is', val[j])
      let arr = [val[j].longitude, val[j].latitude]
      console.log(j)
      suggestedLocation.push(arr)
    }


    for (let i = 0; i < suggestedLocation.length; i++) {
      console.log('INSIDE FOR LOOP', suggestedLocation[i])
      arr.push({
        type: 'Feature',
        id: i,
        geometry: {
          coordinates:
            suggestedLocation[i]
          ,
          type: 'Point',
        },
      });
    }

    this.setState({
      featureCollection: {
        type: 'FeatureCollection',
        features: arr,
      },
    });
    console.log("updated location")
  }

  onRefreshCall(){
    if(this.state.currentLat !== ''){
      this.camera.moveTo([this.state.currentLong, this.state.currentLat]);
      this.camera.zoomTo(11, 1000);
    }
  }

  resetState(){
   this.setState({firstRender: false})
  }

  render() {
    const { postDealerDataCoordinates } = this.props;
    // console.log("postDealerDataCoordinates")
    const locationComponent = this.state.gpsState ? (
      <MapmyIndiaGL.UserLocation
        animated={true}
        visible={true}
        showsUserHeadingIndicator={true}
        onUpdate={location => this.onUpdate(location)}
      >
        {/* <MapmyIndiaGL.SymbolLayer
          id="symbolLocationSymbols"
          minZoomLevel={1}
          style={{
            iconImage: vicon,
            iconSize: 0.1,
            iconAnchor: 'top',
            iconAllowOverlap: true,
          }}
        /> */}
           
            <MapmyIndiaGL.SymbolLayer
              id="currentLoc"
              style={{
                iconImage: userMarker,
                iconSize: 0.1,
                iconAnchor: 'top',
              }}
            />
         

      </MapmyIndiaGL.UserLocation>
    ) : null;

    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: 'transparent',
            position: 'absolute',
            zIndex: 10,
          }}>
          <Head onRefreshCall={() => {this.onRefreshCall()}} resetState={() => {this.resetState()}} />
        </View>
        <MapmyIndiaGL.MapView style={{ flex: 1 }}
          onDidFinishLoadingMap={() => this.onLoad()}
          onPress={event => this.onPress(event)}>
          <MapmyIndiaGL.PointAnnotation id='demo' coordinate={[28.618811049967388, 77.0781219181116]} />
          <MapmyIndiaGL.Camera
            ref={c => (this.camera = c)}
            zoomLevel={10}
            centerCoordinate={DEFAULT_CENTER_COORDINATE}
          />
          {locationComponent}

          <MapmyIndiaGL.ShapeSource
            id="symbolLocationSource"
            onPress={e => this.onMarkerClick(e)}
            // hitbox={{ width: 20, height: 20 }}
            shape={postDealerDataCoordinates}>
            <MapmyIndiaGL.SymbolLayer
              id="symbolLocationSymbols"
              minZoomLevel={1}
              style={{
                iconImage: exampleIcon,
                iconSize: 0.1,
                // textField: ['get', 'placeName'],
                iconAnchor: 'top',
                // textOffset: [0, -2.0],
                // textSize: 12,
                iconAllowOverlap: true,
                // textAllowOverlap: false,
                // textOptional: true,
                // textJustify: 'center',
                // textColor: 'black',
                // textHaloColor: 'white',
                // textHaloWidth: 5,
              }}
            />
          </MapmyIndiaGL.ShapeSource>

          <MapmyIndiaGL.ShapeSource
            id="routeSource"
            shape={this.state.polygon}>
            <MapmyIndiaGL.FillLayer
              id="routeFill"
              style={{
                fillColor: 'green',
                fillOpacity: 0.3,
                fillAntialias: true,
              }}
            />
          </MapmyIndiaGL.ShapeSource>
        </MapmyIndiaGL.MapView>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  saveLatLong: state.loginReducer.saveLatLong,
  postDealerDataCoordinates: state.postDealerReducer.postDealerDataCoordinates,
  radius:state.postDealerReducer.radius
  // postDealerDataCoordinates:state.postDealerReducer.postDealerDataCoordinates
});

// const ActionCreators = Object.assign(
// {},
// saveLatLong,
// postDealerDataCoordinates
//     );

// const mapDispatchToProps = dispatch => ({
//     return: {
//       postDealerDataCoordinatesApi :(event)=>dispatch(postDealerDataCoordinates)
//     }});

export default connect(mapStateToProps, { postDealerDataCoordinatesApi })(CurrentLocationActivity);
