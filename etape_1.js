var fs = require("fs");

var data = fs.readFileSync('public/text/collection_provinces.json');

write(data);
