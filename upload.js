var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("vegpwa");
  fs.readFile('json/mainmenu.json', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
	var json = JSON.parse(data);
  dbo.collection("vegshopper").insert(json, function(err, res) {
    if (err) throw err;
    console.log(data);
    db.close();
  });
});
});