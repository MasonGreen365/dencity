// //attempting to use https://data.seattle.gov/dataset/Parcels/di3q-b62h/about_data
//search bar: https://github.com/Esri/esri-leaflet-geocoder

// Fetch geoJSON data
fetch('/static/Zoned_Development_Capacity_Layers_2016.js')
  .then(response => response.text())
  .then(parcelsScript => {
    // Dynamically evaluate the script to initialize the parcels variable
    eval(parcelsScript); 

    // Ensure parcels is defined
    if (typeof parcels === 'undefined') {
      throw new Error("parcels is not defined in the fetched script.");
    }
    return parcels;
  })
  .then(parcels => {
    // Initialize map & boundaries
    // Define the boundaries

    var southWest = L.latLng(47.696694, -122.238916);
    var northEast = L.latLng(47.50675, -122.43375);
    var bounds = L.latLngBounds(southWest, northEast);

    // Make Map
    var map = L.map('map').setView([47.6062, -122.3321], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    // Set max bounds
    map.setMaxBounds(bounds);

    // Clean parcel data
    var reducedParcels = cleanGeoJsonData({ features: parcels });

    // Add styling for eligible properties
    L.geoJSON(reducedParcels, {
      style: function(feature) {
        switch (feature.properties["STATUS_TEXT_1"]) {
          case 'Substantially Developed': return {color: "#cb997e"};
          case 'Under Developed':   return {color: "#0E8561"};
          default: return {color: "#1067A6"}; // Catch any other exceptions
        }
      },
      onEachFeature: onEachFeature
    }).addTo(map);

    // Search Functionality (from esri-leaflet-geocoder)
    // create the geocoding control and add it to the map
    var searchControl = L.esri.Geocoding.geosearch({
      providers: [
        L.esri.Geocoding.arcgisOnlineProvider({
          // API Key to be passed to the ArcGIS Online Geocoding Service
          apikey: 'AAPK1afbbf1c0d1b49949739f9b38e280dfcRJ_kTfArtYexSVSoYsayh0-hQ1PcFHZ6EeZ4SUrO4KgbjcIQiAOjDYGyPnns1hgF'
        })
      ]
    }).addTo(map);

    // create an empty layer group to store the results and add it to the map
    var results = L.layerGroup().addTo(map);

    // listen for the results event and add every result to the map
    searchControl.on("results", function (data) {
      results.clearLayers();
      for (var i = 0; i < data.results.length; i++) {
        results.addLayer(L.marker(data.results[i].latlng));
      }
    });
  })
  .catch(error => console.error('Error fetching map geoJSON:', error));

//Bind popup to each parcel
function onEachFeature(feature, layer) {
  // Bind popup with address or another relevant property
  var popupContent = "<b>Address:</b> " + feature.properties.ADDRESS + "<br>" +
                     "<b>Name:</b> " + (feature.properties.PROP_NAME || "N/A") + "<br>" +
                     "<b>Year Built:</b> " + feature.properties.YR_BUILT;

  layer.bindPopup(popupContent);
}

// Clean geoJSON data
function cleanGeoJsonData(geoJson) {
  //Properties
  const propertiesToKeep = [
    "OBJECTID", "PIN", "ADDRESS", "PROP_NAME", "LAND_SQFT", 
    "LAND_USE_DESC", "ZONING", "SF_UNITS", "YR_BUILT", 
    "REDEV_FL_AREA", "AVAIL_SQFT", "STATUS_TEXT_1", "STATUS_TEXT_2"
  ];

  // Construct feature layer
  const cleanedFeatures = geoJson.features.map(parcel => {
    const cleanedProperties = {};

    // Keep only the required properties
    propertiesToKeep.forEach(key => {
      cleanedProperties[key] = parcel.properties[key];
    });

    // Add the geometry to the cleaned feature
    return {
      type: "Feature",
      properties: cleanedProperties,
      geometry: parcel.geometry
    };
  });

  return {
    type: "FeatureCollection",
    features: cleanedFeatures
  };
}
