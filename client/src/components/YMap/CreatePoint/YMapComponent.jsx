import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

function YMapComponent() {

  let myMap;

  const coordsOne = [55.75, 37.57];
  const coordsTwo = [55.76, 37.58];
  const coordsThree = [55.74, 37.56];

  function myGeoCode(ymaps, myMap, address) {
    ymaps.geocode(address, {
      results: 1
    }).then(function (res) {
      // Выбираем первый результат геокодирования.
      let firstGeoObject = res.geoObjects.get(0)
      // Координаты геообъекта.
      let coords = firstGeoObject.geometry.getCoordinates()
      // Область видимости геообъекта.
      let bounds = firstGeoObject.properties.get('boundedBy');

      firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
      // Получаем строку с адресом и выводим в иконке геообъекта.
      //firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());

      // Добавляем первый найденный геообъект на карту.
      myMap.geoObjects.add(firstGeoObject);
      // Масштабируем карту на область видимости геообъекта.
      myMap.setBounds(bounds, {
        // Проверяем наличие тайлов на данном масштабе.
        checkZoomRange: true
      });

      let myPlacemark = new ymaps.Placemark(coords, {
        iconContent: 'моя метка',
      }, {
        preset: 'islands#violetStretchyIcon'
      });

      myPlacemark.events.add('click', function () {
        alert(address)
      });

      myMap.geoObjects.add(myPlacemark);
    });
  }

  // function init(ymaps, myMap) {
  //   checkedObjects.forEach(address => myGeoCode(ymaps, myMap, `${address.district.city.name}, ${address.address}`))
  // }

  return (
    <YMaps>
      <div>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 10 }}
          width={450}
          height={300}
          // instanceRef={ref => (this.Map = ref)}
          modules={["geolocation", "geocode"]}
          // onLoad={ymaps => {
          //   ymaps.ready(() => {
          //     init(ymaps, myMap)
          //   });
          // }}
          instanceRef={yaMap => {
            if (yaMap) {
              myMap = yaMap;
            }
          }}
        >
          <Placemark key={1} geometry={coordsOne} />
          <Placemark key={2} geometry={coordsTwo} />
          <Placemark key={3} geometry={coordsThree} />
        </Map>
      </div>
    </YMaps>
  )
}

export default YMapComponent;
