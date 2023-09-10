//create variable 'ghoul' with values 'Ken', 'Kaneki', '23'; and show in console 
//I'm Ken Kaneki I'm 23 years old and I'm a ghoul

let ghoul = {name: 'Ken', surname: 'Kaneki', age: '23' };

let str = "I'm "+ ghoul.name + ' ' + ghoul.surname +" I'm " + ghoul.age + ' ' + "years old " + "and I'm a ghoul" 

console.log(str)

module.exports.ghoul = ghoul;
module.exports.str =  str;