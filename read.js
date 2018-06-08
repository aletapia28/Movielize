var loadFile = function(event) {
    // Init
    var input = event.target;
    var reader = new FileReader();
    
    // Read the filend
    reader.readAsText(input.files[0]);
    
    // Invoked when file is loading. 
    reader.onload = function(){
    
        // parse file to JSON object
        var jsonObject = reader.result;
        var json = JSON.parse(jsonObject);

    //     jsonlayer = L.geoJson(json, {
    // onEachFeature: function (feature, layer) {
    //   layer.bindPopup(feature.properties.name);
    // }).addTo(map);
    //     console.log(jsonObject);
    
    };
    };