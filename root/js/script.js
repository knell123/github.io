var total = 52;
var items = 4;


	
function ws1_add(){
	total += 7;
	items += 1;
	output();
};

function ws2_add(){
	total += 16;
	items += 1;
	output();
};

function ws3_add(){
	total += 25;
	items += 1;
	output();
};

function ws4_add(){
	total += 10;
	items += 1;
	output();
};

function ws5_add(){
	total += 6;
	items += 1;
	output();
};

function ms1_add(){
	total += 12;
	items += 1;
	output();
};

function ms2_add(){
	total += 40;
	items += 1;
	output();
};

function ms3_add(){
	total += 22;
	items += 1;
	output();
};

function ms4_add(){
	total += 11;
	items += 1;
	output();
};

function ms5_add(){
	total += 7;
	items += 1;
	output();
};

function mj1_add(){
	total += 20;
	items += 1;
	output();
};

function mj2_add(){
	total += 15;
	items += 1;
	output();
};

function mj3_add(){
	total += 25;
	items += 1;
	output();
};

function wj1_add(){
	total += 20;
	items += 1;
	output();
};

function wj2_add(){
	total += 15;
	items += 1;
	output();
};

function wj3_add(){
	total += 25;
	items += 1;
	output();
};

function output(){
	window.alert("Your cart has been updated. Visit the cart when you are ready to confirm your purchase");
};

function resetNums(){
	total = 0;
	items = 0;
};

function getTotal(){
	document.getElementById("myTotal").innerHTML = total;
};
document.querySelector('.total_results').innerHTML = total;
function getItems(){
	document.getElementById("myItems").innerHTML = items;
};
document.querySelector('.item_results').innerHTML = items;



