var wms_layers = [];


        var lyr_Backgroundmap_0 = new ol.layer.Tile({
            'title': 'Background map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FlyingsquirrelobservationsinSouthernFinland18532024_1 = new ol.format.GeoJSON();
var features_FlyingsquirrelobservationsinSouthernFinland18532024_1 = format_FlyingsquirrelobservationsinSouthernFinland18532024_1.readFeatures(json_FlyingsquirrelobservationsinSouthernFinland18532024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FlyingsquirrelobservationsinSouthernFinland18532024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlyingsquirrelobservationsinSouthernFinland18532024_1.addFeatures(features_FlyingsquirrelobservationsinSouthernFinland18532024_1);
var lyr_FlyingsquirrelobservationsinSouthernFinland18532024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FlyingsquirrelobservationsinSouthernFinland18532024_1, 
                style: style_FlyingsquirrelobservationsinSouthernFinland18532024_1,
                popuplayertitle: "Flying squirrel observations in Southern Finland 1853-2024",
                interactive: true,
    title: 'Flying squirrel observations in Southern Finland 1853-2024<br />\
    <img src="styles/legend/FlyingsquirrelobservationsinSouthernFinland18532024_1_0.png" /> 1 - 70<br />\
    <img src="styles/legend/FlyingsquirrelobservationsinSouthernFinland18532024_1_1.png" /> 70 - 276<br />\
    <img src="styles/legend/FlyingsquirrelobservationsinSouthernFinland18532024_1_2.png" /> 276 - 620<br />\
    <img src="styles/legend/FlyingsquirrelobservationsinSouthernFinland18532024_1_3.png" /> 620 - 1801<br />\
    <img src="styles/legend/FlyingsquirrelobservationsinSouthernFinland18532024_1_4.png" /> 1801 - 3009<br />'
        });

lyr_Backgroundmap_0.setVisible(true);lyr_FlyingsquirrelobservationsinSouthernFinland18532024_1.setVisible(true);
var layersList = [lyr_Backgroundmap_0,lyr_FlyingsquirrelobservationsinSouthernFinland18532024_1];
lyr_FlyingsquirrelobservationsinSouthernFinland18532024_1.set('fieldAliases', {'fid': 'fid', 'GML_ID': 'GML_ID', 'NATCODE': 'NATCODE', 'Municipality': 'Municipality', 'NAMESWE': 'NAMESWE', 'LANDAREA': 'LANDAREA', 'FRESHWAREA': 'FRESHWAREA', 'SEAWAREA': 'SEAWAREA', 'TOTALAREA': 'TOTALAREA', 'Observations': 'Observations', 'taxonomic_order_count': 'taxonomic_order_count', 'formatted_taxon_name_count': 'formatted_taxon_name_count', 'abundance_verbatim_count': 'abundance_verbatim_count', 'formatted_date_time_count': 'formatted_date_time_count', 'country_count': 'country_count', 'bio_province_interpreted_count': 'bio_province_interpreted_count', 'locality_count': 'locality_count', 'collection_name_count': 'collection_name_count', 'team_count': 'team_count', 'year_count': 'year_count', 'date_formatted_count': 'date_formatted_count', 'pvm_count': 'pvm_count', });
lyr_FlyingsquirrelobservationsinSouthernFinland18532024_1.set('fieldImages', {'fid': 'TextEdit', 'GML_ID': 'TextEdit', 'NATCODE': 'TextEdit', 'Municipality': '', 'NAMESWE': 'TextEdit', 'LANDAREA': 'TextEdit', 'FRESHWAREA': 'TextEdit', 'SEAWAREA': 'TextEdit', 'TOTALAREA': 'TextEdit', 'Observations': '', 'taxonomic_order_count': 'TextEdit', 'formatted_taxon_name_count': 'TextEdit', 'abundance_verbatim_count': 'TextEdit', 'formatted_date_time_count': 'TextEdit', 'country_count': 'TextEdit', 'bio_province_interpreted_count': 'TextEdit', 'locality_count': 'TextEdit', 'collection_name_count': 'TextEdit', 'team_count': 'TextEdit', 'year_count': 'TextEdit', 'date_formatted_count': 'TextEdit', 'pvm_count': 'TextEdit', });
lyr_FlyingsquirrelobservationsinSouthernFinland18532024_1.set('fieldLabels', {'fid': 'hidden field', 'GML_ID': 'hidden field', 'NATCODE': 'hidden field', 'Municipality': 'inline label - always visible', 'NAMESWE': 'hidden field', 'LANDAREA': 'hidden field', 'FRESHWAREA': 'hidden field', 'SEAWAREA': 'hidden field', 'TOTALAREA': 'hidden field', 'Observations': 'inline label - always visible', 'taxonomic_order_count': 'hidden field', 'formatted_taxon_name_count': 'hidden field', 'abundance_verbatim_count': 'hidden field', 'formatted_date_time_count': 'hidden field', 'country_count': 'hidden field', 'bio_province_interpreted_count': 'hidden field', 'locality_count': 'hidden field', 'collection_name_count': 'hidden field', 'team_count': 'hidden field', 'year_count': 'hidden field', 'date_formatted_count': 'hidden field', 'pvm_count': 'hidden field', });
lyr_FlyingsquirrelobservationsinSouthernFinland18532024_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});