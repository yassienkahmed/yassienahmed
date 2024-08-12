const toggleButton=document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click',function() {document.body.classList.toggle('dark-mode');});

//Define variables
let noun="dragon";
let adjective="firece";
let verb="fly";
let numer=3;
let calculatednumber=number * 2;
let isFlying=true;

//prompt the user for input
let usercolor = prompt("Enter a color");

//create the story
let story ='once upon a time, there as a ${adjective} ${noun} that loved to ${verb}'
Everyday, 'it would ${verb} overtheland;paintingthestikes${usercolor}'
'it had${calcualatednuber}friends whowould join in the fun,makingeveryonebelievethat ${isFlying} magicexist'
//output the story to the console
console.log(story);
