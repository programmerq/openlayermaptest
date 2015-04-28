// Map views always need a projection.  Here we just want to map image
// coordinates directly to map coordinates, so we create a projection that uses
// the image extent in pixels.
var extent = [0, 0, 4875, 3225];
var projection = new ol.proj.Projection({
    code: 'eberron-image',
    units: 'pixels',
    extent: extent
});
var throneholdextent = [2302, 1564+1.75*35, 2302+38, 1564+2.75*35];
var throneholdprojection = new ol.proj.Projection({
    code: 'thronehold-image',
    units: 'pixels',
    extent: throneholdextent
});

var thronehold_layer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        attributions: [
            new ol.Attribution({
                html: 'Khorvaire'
            })
        ],
        url: 'Thronehold.jpg',
        imageSize: [950, 875],
        projection: projection,
        imageExtent: throneholdextent,
    })
});
thronehold_layer.setMaxResolution(0.2)
var map = new ol.Map({
    layers: [
        new ol.layer.Image({
            source: new ol.source.ImageStatic({
                attributions: [
                    new ol.Attribution({
                        html: 'Khorvaire'
                    })
                ],
                url: 'Khorvaire 4th edition.jpg',
                imageSize: [4575, 3225],
                projection: projection,
                imageExtent: extent
            })
        }),
        thronehold_layer
    ],
    target: 'map',
    view: new ol.View({
        projection: projection,
        center: ol.extent.getCenter(extent),
        zoom: 2
    })
});