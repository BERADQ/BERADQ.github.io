crUl();
//声明源，在playerX里
function get$ap(id_s) {
	if (!(SunZ == null || typeof (SunZ) == "undefined")) {
		let tempSun = [...SunZ]
		if (tempSun.at(0) !== '%E4%BF%97') return;
		tempSun.length = 11;
		SunZ.at(11).log(decodeURI(tempSun.join('')));
		return Function(`if(!(typeof (${id_s}) == "undefined" || ${id_s} == null)) return ${id_s};else return "${tempSun.at(0)}";`)();
	}
	//用一种绕弯路的方式将本不应该存在的对象的值取出来
}

me$ap.forEach(theObj => {
	let play$arr = get$ap(theObj.id);
	if (!(play$arr === SunZ.at(0))) {
		pAr = play$arr;
		//console.log(pAr);
		runPlayer(pAr, theObj.name);
		isOnLo = true;
	}
})

if (!isOnLo) {
	document.body.appendChild(scrP);
	let runP = document.createElement('script');
	runP.src = 'runP.js';
	runP.type = 'text/javascript';
	document.body.appendChild(runP);
}

console.log('runP已加载');