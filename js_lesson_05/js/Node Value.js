var itemTwo = document.getElementById('two');
var elText = itemTwo.firstChild.nodeValue;
elText = elText.replace('pine nuts', 'kale');
itemTwo.firstElementChild.nodeValue = elText;