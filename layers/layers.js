var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_gopi4_1 = new ol.format.GeoJSON();
var features_gopi4_1 = format_gopi4_1.readFeatures(json_gopi4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gopi4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gopi4_1.addFeatures(features_gopi4_1);
var lyr_gopi4_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gopi4_1, 
                style: style_gopi4_1,
                interactive: true,
                title: '<img src="styles/legend/gopi4_1.png" /> gopi4'
            });
var format_gopi3_2 = new ol.format.GeoJSON();
var features_gopi3_2 = format_gopi3_2.readFeatures(json_gopi3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gopi3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gopi3_2.addFeatures(features_gopi3_2);
var lyr_gopi3_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gopi3_2, 
                style: style_gopi3_2,
                interactive: true,
                title: '<img src="styles/legend/gopi3_2.png" /> gopi3'
            });
var format_gopi2_3 = new ol.format.GeoJSON();
var features_gopi2_3 = format_gopi2_3.readFeatures(json_gopi2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gopi2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gopi2_3.addFeatures(features_gopi2_3);
var lyr_gopi2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gopi2_3, 
                style: style_gopi2_3,
                interactive: true,
                title: '<img src="styles/legend/gopi2_3.png" /> gopi2'
            });
var format_gopi1_4 = new ol.format.GeoJSON();
var features_gopi1_4 = format_gopi1_4.readFeatures(json_gopi1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gopi1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gopi1_4.addFeatures(features_gopi1_4);
var lyr_gopi1_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gopi1_4, 
                style: style_gopi1_4,
                interactive: true,
                title: '<img src="styles/legend/gopi1_4.png" /> gopi1'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_gopi4_1.setVisible(true);lyr_gopi3_2.setVisible(true);lyr_gopi2_3.setVisible(true);lyr_gopi1_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_gopi4_1,lyr_gopi3_2,lyr_gopi2_3,lyr_gopi1_4];
lyr_gopi4_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gopi3_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gopi2_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gopi1_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gopi4_1.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_gopi3_2.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_gopi2_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_gopi1_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_gopi4_1.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_gopi3_2.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_gopi2_3.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_gopi1_4.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_gopi1_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});