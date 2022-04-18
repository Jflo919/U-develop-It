// utility to check if an object has the required properties
// e.g., inputCheck(object, 'prop1', 'prop2', 'etc')

module.exports = function(obj, ...props) {
  const errors = [];

  props.forEach((prop) => {
    // if property is blank or doesn't exist, add to errors array
    if (obj[prop] === undefined || obj[prop] === '') {
      errors.push(`No ${prop} specified.`);
    }
  });

  if (errors.length) {
    return {
      error: errors.join(' ')
    };
  }
  
  return null;
};



// function to return initials of first and last name
// function abbrevName(name) {
//   var nameArray = name.split(' ');
//   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }

function countSheeps() {
  let arrayOfSheepsz = [true, false, true, true, false, true, true, false];
  var num = 0;

  for (var i = 0; i < arrayOfSheepsz.length; i++)
    if(arrayOfSheepsz[i] == true)
    num++;

    return num;
}
// alternatively...

// function countSheeps(arrayOfSheeps) {
//  return arrayOfSheeps.filter(Boolean).length;  
//}