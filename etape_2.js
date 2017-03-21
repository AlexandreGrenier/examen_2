var obj;

fs.readFile('public/text/collection_provinces.json', function (err, data){
	if(err) return console.error(err);
	obj = JSON.parse(data);
	console.log(obj.toString());
});

function etape2(){
	 var chaine = "";

	chaine = chaine+"<table style='border: 1px solid black'>";
	for (var i = 0; i <= obj.length-1; i++) {

		chaine = chaine+"<tr><td>" + obj[i][0].toString() + "</td><td>" + obj[i][1].toString()+ "</td><td>"+ obj[i][2].toString()+"</td></tr>";
	}
	chaine = chaine+"</table>";

	return chaine;
}

write(etape2());