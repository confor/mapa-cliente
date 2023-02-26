const L = require('leaflet');
const pluginLocateControl = require('leaflet.locatecontrol');

const DEFAULT_LAT = -35.40554;
const DEFAULT_LON =  -71.63459;
const BOUNDS = [[-35.4115221, -71.6431327], [-35.4000127, -71.6260627]];
const ATTRIB = 'OpenStreetMap';

const options = {
	center: [DEFAULT_LAT, DEFAULT_LON],
	maxBounds: BOUNDS,
	attributionControl: false,
	zoom: 17,
	maxZoom: 18,
	minZoom: 16,
	zoomControl: false
};

const map = L.map('leaflet', options);

L.control.attribution({
	prefix: false
}).addAttribution(ATTRIB).addTo(map);

L.rectangle(BOUNDS, {
	color: 'rgba(0, 0, 0, 0.2)',
	fill: false,
}).addTo(map);

L.control.zoom({
    position: 'topright'
}).addTo(map);

L.control.locate({
    position: 'topright',
    locateOptions: {
        enableHighAccuracy: true
    }
}).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png').addTo(map);

module.exports = map;
