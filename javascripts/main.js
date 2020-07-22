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
	i = word.length - 1;
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
				word += " " + getRandom(dListClean);
				break;
			case 'd':
				word += " " + getRandom(wListClean);
				break;
			case 'w':
				word += " " + getRandom(rListClean);
				break;
		}
	}
	return title;
}

window.onload = function() {
	document.getElementById('project_title').innerHTML = getTitle();
}