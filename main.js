// 1. 
/*
var person = {
	name: "Luisa",
	age: 25
};


var myName = function(key) {
	console.log(key.name);
};

myName(person)



//2. 


var words = ["hello" , "you"];


var newWord = words.join("");
console.log(newWord.length);

// 3. 
var keyValue = function(key, item){
	var newValue = {
	key: item 
	}

}
console.log(keyValue("city" , "denver")); 

//4. 

var negativeIndex = function(item, i){
	return item[item.length+i];
}

console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'] , -2));

// 5. */


var removeM = function(str){
	var newString = '';
	for(var i=0; i<str.length; i++) {
		if (str[i] != 'm') {
			newString += str[i];
		}
	}
	return newString;
}

console.log(removeM('family')); 


 var capAllNames = function(names) {
    var capNames = [];
    for(var i=0; i<names.length; i++) {
      var firstLetter = names[i][0];
      var rest = names[i].slice(1);
      capNames.push(firstLetter.toUpperCase() + rest);
    }
    return capNames;  

 };

 var names = ['tj', 'dominic', 'sindre', 'addy', 'isaac'];
 console.log(capAllNames(names).join(', '));

//7. 
var vowels = function(str) {
	var newArray = [];
	for(var i=0; i<str.length; i++) {
		if( (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')){
			newArray.push(str[i]);
		}
	}
	return newArray;
};

console.log(vowels('alabama'));












// 10. 

