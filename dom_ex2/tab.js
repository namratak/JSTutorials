let tab1 = document.getElementById('tab1_button');
let tab2 = document.getElementById('tab2_button');
let output = document.getElementById('output');
let test = 'goodbye';

function clickTab1() {
	output.innerHTML = 'Hi T1!';
}

function clickTab2(text) {
	output.innerHTML = text;
}

tab1_button.addEventListener('click', clickTab1);

tab2_button.addEventListener('click', () => {
  clickTab2(test);
});
