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


function GlobalSearch(obj, title ,year, director,cast,genre,notes ){
    var found =[];

    for (var i in obj) {

  if (obj[i].title == title || obj[i].year == year 
    || obj[i].director == director || obj[i].cast == cast 
    || obj[i].genre == genre || obj[i].notes == notes ){

        found.push(obj[i]);
        console.log(obj[i]);
    }

    
    
    

//return found;
}
}







exports.ReadToArray = ReadToArray;
module.exports.GlobalSearch = GlobalSearch;

