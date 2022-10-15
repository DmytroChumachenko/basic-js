const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(members === null || members === undefined || members === false){
    return false;
  }

  let q = 0, r = 0;

  while (q < members.length) {
    const val = members[q];
    if (typeof val === 'string') members[r++] = val.trim().toUpperCase();
    q++;
  }

  members.length = r;

    if(members.length === 0){
      return false;
    }

    let nameOfTeam = [];
    for(let i = 0; i < members.length; i++) {
      let val = members[i];
      nameOfTeam.push(val[0]);
    }

    let sortNameOfTeam = nameOfTeam.sort().join('').toUpperCase();
    return sortNameOfTeam;
  }

//createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max', true, null]);

module.exports = {
  createDreamTeam
};