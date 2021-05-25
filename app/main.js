import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1Ijoic2lsdmlhY2diIiwiYSI6ImNrb2pwbGY1MzB4MzIycHJtZTZqOHQzZHQifQ.4OCtysgsx9_5mkZ6tu-QxQ';


window.addEventListener('load', () => {
    initCenter ();
    renderMap();


    initGetCenter ();
    initMapEvents();  
  
});


let map;
let markers = [];
let center;
let zoom;

const initCenter = () => {

}


const renderMap = () => {
    map = new mapboxgl.Map({
        container: "mi_mapa",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-74.5, 40],
        zoom: 9,
    });

    navigator.geolocation.getCurrentPosition(({coords}) => {
        map.flyTo({
            center: [coords.longitude, coords.latitude], 
            zoom: 15
        });
    });
};




const initGetCenter = () => {

};

const initMapEvents = () => {
    map.on("click", (ev) => {
				const marker = new mapboxgl.Marker()
					.setLngLat([ev.lngLat.longitude, ev.lngLat.latitude])
					.addTo(map);
				markers.push(marker); 
});
};