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
       
        if (obj[i].title == title & obj[i].year == year 
            & obj[i].director == director & obj[i].cast == cast 
            & obj[i].genre == genre & obj[i].notes == notes ){
                found.push(obj[i]);
            }   
        }
        return found;
}

function searchTitle (obj, title ){
    var found=[];
    for (var i in obj){
        if(obj[i].title== title ){
            found.push(obj[i])
            console.log(obj[i])
        } 
    }
    return found;
}

function searchyear (obj, year ){
    var found=[];
    for (var i in obj){
        if(obj[i].year== year ){
            found.push(obj[i])
            console.log(obj[i])
        } 
    }
    return found;
}
function searchdirector (obj, director ){
    var found=[];
    for (var i in obj){
        if(obj[i].director== director ){
            found.push(obj[i])
            console.log(obj[i])
        } 
    }
    return found;
}
function searchcast (obj, cast ){
    var found=[];
    for (var i in obj){
        if(obj[i].cast== cast ){
            found.push(obj[i])
            console.log(obj[i])
        } 
    }
    return found;
}
function searchgenre (obj, genre ){
    var found=[];
    for (var i in obj){
        if(obj[i].genre== genre ){
            found.push(obj[i])
            console.log(obj[i])
        } 
    }
    return found;
}

function searchnotes (obj, notes ){
    var found=[];
    for (var i in obj){
        if(obj[i].notes== notes ){
            found.push(obj[i])
            console.log(obj[i])
        } 
    }
    return found;
}



exports.ReadToArray = ReadToArray;
module.exports.GlobalSearch = GlobalSearch;

module.exports.searchTitle = searchTitle;
module.exports.searchyear = searchyear;
module.exports.searchdirector = searchdirector;
module.exports.searchcast = searchcast;
module.exports.searchgenre = searchgenre;
module.exports.searchnotes = searchnotes;

