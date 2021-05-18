import React, {useContext} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {Screen} from '../../components/Screen';
import {connect} from 'react-redux';
import AppNavigationHeader from '../../components/AppNavigationHeader';
import LoadingView from '../../components/LoadingView';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapView from 'react-native-maps';
import mapNormal from '../../utils/mapNormal.json';
import mapDarkStyle from '../../utils/mapDarkStyle.json';
import mapAubergine from '../../utils/mapAubergine.json';

const MapScreen = ({navigation}) => {
  const theme = useSelector(state => state.themes.theme);

  const mapTheme = () => {
    return theme.mode === 'light' ? mapNormal : mapDarkStyle;
  };

  return (
    <Screen>
      <AppNavigationHeader height={100}>
        <AntDesign.Button
          name="home"
          size={25}
          backgroundColor={theme.SECONDARY_COLOR}
          color={theme.PRIMARY_TEXT_COLOR}
          onPress={() => navigation.navigate('Home')}
        />
        <AntDesign.Button
          name="user"
          size={25}
          backgroundColor={theme.SECONDARY_COLOR}
          color={theme.PRIMARY_TEXT_COLOR}
          onPress={() => navigation.navigate('Profile')}
        />
      </AppNavigationHeader>
      <MapView
        customMapStyle={mapTheme()}
        style={{...styles.Maps}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </Screen>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Maps: {
    flex: 1,
  },
});
