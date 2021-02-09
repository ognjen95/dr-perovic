import * as React from 'react';

import { useGoogleMaps } from 'react-hook-google-maps';

const Gmaps = () => {
  const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    'AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk',
    // NOTE: even if you change options later
    {
      center: { lat: 44.8000718139259, lng: 20.452493553602945 },
      zoom: 14,
    }
  );
  console.log(map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
  console.log(google); // google API object (easily get google.maps.LatLng or google.maps.Marker or any other Google Maps class)
  return <div ref={ref} style={{ width: '100%', height: '300px' }} />;
};

export default Gmaps;
