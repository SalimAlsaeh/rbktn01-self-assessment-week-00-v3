// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
// var familyTree = {
//   'firstName': 'Beth',
//   'lastName': 'Johnson',
//   'location': 'San Francisco',
//   'children': [
//     {
//       'firstName': 'Beth Jr.',
//       'lastName': 'Johnson',
//       'location': 'Berkeley',
//       'children': [
//         {
//           'firstName': 'Smitty',
//           'lastName': 'Won',
//           'location': 'Beijing',
//           'children': []
//         }
//       ]
//     },
//     {
//       'firstName': 'Joshie',
//       'lastName': 'Wyattson',
//       'location': 'Berkeley',
//       'children': []
//     }
//   ]
// };

// var livesInBerkeley = function (familyMember) {
//   return familyMember.location === 'Berkeley';
// }

// filterFamilyMembers(familyTree, livesInBerkeley)

// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];



var filterFamilyMembers = function (familyTree, truthTest) {
	// this array will hold all of the names
	var names = [];
	// this function has two if conditions, the first if checks if this particular node passes the truth test or not
	// if so, it pushes the first and last name of the element to the names array.
	// the second if checks if that element has children or not, if so, it loops through each elememnt and invoke the same function 
	// recursevly to traverse through each element of the tree.

	var getChlidrenByElement = function(element){
		if (truthTest(element)) {
			result.push(element.firstName + ' ' + element.lastName)
		}

		if (element.children) {
			element.children.forEach(function(node){
				getChlidrenByElement(node);
			});
		}
	}
	// to start the process // the ignition
	getChlidrenByElement(familyTree);
	return result;
};

