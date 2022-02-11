import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

function YMapComponentShow({ coordsType, address }) {

  const mapState = {
    center: coordsType,
    zoom: 16,
  };

  let myMap;

  const ymaps = React.useRef(null);
  const mapRef = React.useRef(null);

  // const onMapClick = (e) => {
  //   const coords = e.get("coords");

  //   if (placemarkRef.current) {
  //     placemarkRef.current.geometry.setCoordinates(coords);
  //   } else {
  //     placemarkRef.current = createPlacemark(coords);
  //     mapRef.current.geoObjects.add(placemarkRef.current);
  //     placemarkRef.current.events.add("dragend", function () {
  //       getAddress(placemarkRef.current.geometry.getCoordinates());
  //     });
  //   }
  //   // console.log(typeof coords[0]);
  //   getAddress(coords);
  // };

  return (
    <YMaps query={{ apikey: "096e9939-adbb-4550-8b2c-b0d61ef96eb6" }}>
      <div>
        <Map
          defaultState={{ center: [55.75, 37.57], zoom: 10 }}
          width={550}
          height={300}
          modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
          instanceRef={mapRef}
          onLoad={(ympasInstance) => (ymaps.current = ympasInstance)}
          // onClick={onMapClick}
          state={mapState}
        >
          <Placemark geometry={coordsType} properties={{iconCaption: address }}/>
        </Map>
      </div>
    </YMaps>
  )
}

export default YMapComponentShow;
