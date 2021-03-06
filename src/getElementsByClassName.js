// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var collection = [], index = 0;
	
	function classFilter(element) {
		if (element.classList.contains(className)){

			collection[index] = element;
			index++;
		} 
		var children = element.children;

		for(var i = 0; i < children.length; i++) {
		  classFilter(children[i]);
		}
	}

	classFilter(document.body);
	return collection;
};
