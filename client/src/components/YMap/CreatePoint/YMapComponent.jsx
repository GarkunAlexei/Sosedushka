import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Geocode from "react-geocode";

const mapState = {
  center: [55.753994, 37.622093],
  zoom: 15,
};

function YMapComponent({ setInput }) {

  let myMap;

  const ymaps = React.useRef(null);
  const placemarkRef = React.useRef(null);
  const mapRef = React.useRef(null);

  const createPlacemark = (coords) => {
    return new ymaps.current.Placemark(
      coords,
      {
        iconCaption: "loading.."
      },
      {
        preset: "islands#violetDotIconWithCaption",
        draggable: true
      }
    );
  };

  const getAddress = (coords) => {
    placemarkRef.current.properties.set("iconCaption", "loading..");
    ymaps.current.geocode(coords).then((res) => {
      const firstGeoObject = res.geoObjects.get(0);

      const newAddress = [
        firstGeoObject.getLocalities().length
          ? firstGeoObject.getLocalities()
          : firstGeoObject.getAdministrativeAreas(),
        firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
      ]
        .filter(Boolean)
        .join(", ");

      setInput(prev => ({ ...prev, address: newAddress }))

      placemarkRef.current.properties.set({
        iconCaption: newAddress,
        balloonContent: firstGeoObject.getAddressLine()
      });
    });
  };

  const onMapClick = (e) => {
    const coords = e.get("coords");

    if (placemarkRef.current) {
      placemarkRef.current.geometry.setCoordinates(coords);
    } else {
      placemarkRef.current = createPlacemark(coords);
      mapRef.current.geoObjects.add(placemarkRef.current);
      placemarkRef.current.events.add("dragend", function () {
        getAddress(placemarkRef.current.geometry.getCoordinates());
      });
    }
    setInput(prev => ({ ...prev, coords: coords }))
    // console.log(typeof coords[0]);
    getAddress(coords);
  };

  return (
    <YMaps query={{ apikey: "096e9939-adbb-4550-8b2c-b0d61ef96eb6" }}>
      <div>
        <Map 
          defaultState={{ center: [55.75, 37.57], zoom: 10 }}
          width={450}
          height={300}
          // // instanceRef={ref => (this.Map = ref)}
          // modules={["geolocation", "geocode"]}
          // // onLoad={ymaps => {
          // //   ymaps.ready(() => {
          // //     init(ymaps, myMap)
          // //   });
          // // }}
          // instanceRef={yaMap => {
          //   if (yaMap) {
          //     myMap = yaMap;
          //   }
          // }}
          modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
          instanceRef={mapRef}
          onLoad={(ympasInstance) => (ymaps.current = ympasInstance)}
          onClick={onMapClick}
          state={mapState}
        >
        </Map>
      </div>
    </YMaps>
  )
}

export default YMapComponent;
