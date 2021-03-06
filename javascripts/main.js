let sListClean = ['as', 'asia', 'aside', 'ease', 'is', 'sad', 'sadware', 'said', 'saudi', 'sea',
        'see', 'seed','side', 'so', 'sod', 'soda', 'suade', 'sud', 'sue', 'sued', 'suede', 'us',
        'use', 'used'];
let dListClean = ['adieu', 'ado', 'aid', 'aide', 'audio', 'dewier', 'die', 'do', 'doe',
        'due', 'duo', 'id', 'idea', 'ode'];
let wListClean = ['aw', 'aware', 'awe', 'ew', 'ewe', 'ow', 'owe', 'ower', 'ware', 'war', 'we', 'wear', 'weir',
        'were', 'wire', 'woe', 'woo', 'wooer', 'wore'];
let rListClean = ['aerie', 'aero', 'air', 'are', 'area', 'aria', 'aura', 'ear', 'eerie', 'era', 'ere', 'ire', 
        'oar', 'or', 'ore', 'our', 'roe', 'rue', 'urea'];

function getRandom(list) {
	return list[Math.floor(Math.random() * (list.length))]
}

function findLastConsonant(word) {
	let i = word.length - 1;
	while("aeiou".indexOf(word[i]) >= 0) {
		i--;
	return word[i]
	}
}

function getTitle() {
	let title = "";
	title += getRandom(sListClean)
	while(findLastConsonant(title) != 'r') {	
		switch(findLastConsonant(title)) {
			case 's':
				title += " " + getRandom(dListClean);
				break;
			case 'd':
				title += " " + getRandom(wListClean);
				break;
			case 'w':
				title += " " + getRandom(rListClean);
				break;
		}
	}
	return title;
}

function addTitleToPage() {
	let title = getTitle();
	let indexOfS = title.indexOf('s');
	let indexOfD = title.indexOf('d');
	let indexOfW = title.indexOf('w');
	let indexOfR = title.indexOf('r');

	console.log(title.substring(0,indexOfS));
	console.log(title.substring(indexOfS,indexOfD));
	console.log(title.substring(indexOfD+1, indexOfW));
	console.log(title.substring(indexOfW+1,indexOfR));
	console.log(title.substring(indexOfR+1));

	//document.getElementById("start-to-s").innerHTML = title.substring(0,indexOfS);
	//document.getElementById("s-to-d").innerHTML = title.substring(indexOfS+1,indexOfD);
	//document.getElementById("d-to-w").innerHTML = title.substring(indexOfD+1, indexOfW);
	//document.getElementById("w-to-r").innerHTML = title.substring(indexOfW+1, indexOfR);
	//document.getElementById("r-to-end").innerHTML = title.substring(indexOfR+1);

}
addTitleToPage();
window.onload = function() {
	addTitleToPage();
}
