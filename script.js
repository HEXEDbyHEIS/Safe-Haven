document.addEventListener("DOMContentLoaded", function() {

alert("Welcome to Safe Haven 💙 A safe space just for teens!");

const boredBtn = document.getElementById("boredBtn");

boredBtn.addEventListener("click", function () {

const activities = [
"Watch a funny video",
"Take a quick quiz",
"Play a mini game",
"Read a short story",
"Listen to a new song"
];

const random = Math.floor(Math.random() * activities.length);

alert("Try this: " + activities[random]);

});

});


function shareThought(){

const text = document.getElementById("ventBox").value;

if(text.trim() === ""){
alert("Write something first 😊");
return;
}

alert("Thanks for sharing 💜");

document.getElementById("ventBox").value = "";

}
