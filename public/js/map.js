var map;
var polygons = [];

function initMap() {
    map = L.map('map').setView([51.505, -0.09], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        subdomains: ['a', 'b', 'c']
    }).addTo(map);

    map.on('draw:created', function (e) {
        var polygon = e.layer;
        polygons.push(polygon);
        map.addLayer(polygon);
    });

    map.on('draw:edited', function (e) {
        var layers = e.layers;
        layers.eachLayer(function (layer) {
            var polygon = layer.getLatLngs();
            var polygonLatLngs = [];
            for (var i = 0; i < polygon.length; i++) {
                polygonLatLngs.push([polygon[i].lat, polygon[i].lng]);
            }
            handleMapDraw(polygonLatLngs);
        });
    });

    map.on('draw:deleted', function (e) {
        var layers = e.layers;
        layers.eachLayer(function (layer) {
            map.removeLayer(layer);
            var index = polygons.indexOf(layer);
            if (index !== -1) {
                polygons.splice(index, 1);
            }
        });
    });
}

function addPolygon(polygonLatLngs) {
    var polygon = L.polygon(polygonLatLngs, {
        color: 'blue',
        weight: 3,
        opacity: 0.5
    }).addTo(map);
    polygons.push(polygon);
}

function handleMapDraw(polygonLatLngs) {
    // Call the handleMapDraw service
    getMapConfig().then(config => {
        handleMapDrawFromService(polygonLatLngs, config);
    });
}

function handleMapDrawFromService(polygonLatLngs, mapConfig) {
    // TO DO: implement the logic to handle map drawing based on the polygon boundaries
    console.log('Handle map draw:', polygonLatLngs, mapConfig);
}

document.addEventListener('DOMContentLoaded', function () {
    initMap();
});