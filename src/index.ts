/**
 * Main entry point for signifly-case-assignment API
 */

import { openDb, tableExists, createTbl, ColDef } from 'pk-ts-sqlite-lib';

const tblName = `signifliers7`;
const cdefs: ColDef = {
	name: 'string not null',
	yrs_exp_gen: 'int not null', // Years experience general
	yrs_exp_sig: 'int not null', //  Years experience signifly
	skill: 'string',
};

/*
let iStr = `INSERT INTO ${tblName} ( name, skill) VALUES 
  ( 'TIME MACHINE', 'Passage'), ( 'YESTERDAY', 'Unskilled') ; `;
	*/
	let iStr = `INSERT INTO ${tblName} ( name, skill, yrs_exp_gen, yrs_exp_sig) VALUES 
  ( 'TIME MACHINE', 'Passage', 3, 2), ( 'YESTERDAY', 'Unskilled', 7, 666) ; `;

let tQ = `SELECT * FROM ${tblName}`;

(async () => {
	const db = await openDb(); 
	await createTbl(db, tblName, cdefs);
	let iRes = await db.exec(iStr);
	let res = await db.all(tQ);
	console.log({ res });
	//let te = await tableExists(db, tblName);
	/*
	let te = await tableExists(db, 'kaka');
	console.log({ te });
	let aTbl = await db.exec(ctblStr);
	console.log({ aTbl });

	let iRes = await db.exec(iStr);
	console.log({ iRes });
	let res = await db.all(tQ);
	console.log({ res });
	*/


})();