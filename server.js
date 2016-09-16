const express = require('express');
const app = express();

app.use(express.static('src'));

app.get("/offline.manifest", function(req, res){
  console.log('offline');
  res.header("Content-Type", "text/cache-manifest");
  res.end("CACHE MANIFEST");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});