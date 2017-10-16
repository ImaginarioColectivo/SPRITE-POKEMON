var listOfNumbers = []; // ejercicio de array vacio

listOfNumbers [0] = 2;
listOfNumbers [1] = 3;
listOfNumbers [2] = 5;
listOfNumbers [3] = 7;
listOfNumbers [4] = 11;

var numbers = [1,2,3,4,5]; // ejercicio: un arreglo que debe multiplicarse por 5 
function multiply(numbers){
	var result = [];
	// var result = new array();
	for (var i = 0; i < numbers.length; i++){
		result.push(numbers[i]*5);
	}
	return result;
}

var arr = [1,2,3,4,5,6,7,8,9,10]; // ejercicio: pedirle a un arreglo que nos muestre solo los numeros pares 
function filterEven(arreglo){
	var result = [];
	for (var i = 0; i < arr.length; ){
		if (arr[i] %2 == 0){
			result.push(arr[i]);
		}
	}
	return result;
}



// RETOS DE CODIGO
//  

function removeStringValuesLongerThan(num, obj) {
  var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};




}



var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); 

