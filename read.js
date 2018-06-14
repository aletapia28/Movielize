/*
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
  

    
    };
    };

*/


var fs = require("fs");
function ReadToArray (filename) {
    var data = JSON.parse(fs.readFileSync(filename));
    //console.log(data);
    return data;
}

function loadFile(filepath){
  var arrLines = [];
  fs.stat(filepath, function(err, stat) {
      if(err == null) {
          arrLines = fsReadFileSynchToArray(filepath);
      } else if(err.code == 'ENOENT') {
          console.log('error: loading file ' + filepath + ' not found');
      } else {
          console.log('error: loading file', err.code);
      }
  });
  return arrLines;
}


exports.ReadToArray = ReadToArray;