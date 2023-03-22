import { deepMeld, typeOf, runCli, cwd, GenObj, isSimpleObject, } from '../init.js';


function tst3() {

	let tobj1 = {
		a: 1,
		b: { dog: 5, cat: 'acat', no: 9, },
		c: [5, 7, 'tiger',],
	};

	let tobj2 = {
		a: 'oprim',
		b: { dog: 7, cat: 22, },
		c: [9, 22, 'lion', 5],
	}

	let dm = deepMeld(tobj1, tobj2);

	console.log({ dm });
}

tst3();