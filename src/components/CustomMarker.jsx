import React from 'react';
import { Marker } from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';

const CustomMarker = ({ coordinate, onPress }) => {
  return (
    <Marker onPress={onPress} coordinate={coordinate}>
      <FontAwesome5 name="map-pin" size={30} color="red" />
    </Marker>
  );
};

export default CustomMarker;
