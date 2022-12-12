// Write your code here!
const element = document.getElementById("main").remove();
const newHeader = document.createElement("H1");
newHeader.id = "victory";
newHeader.textContent = ("Baraka is the champion");
document.body.appendChild(newHeader);