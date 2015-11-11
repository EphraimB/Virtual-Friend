var submitButton = document.getElementById("submitButton");
var personOneTalk = document.getElementById("personOneTalk");
var personTwoSays = document.getElementById("personTwoSays");
var personTwoTalk = document.getElementById("personTwoTalk");

submitButton.onclick = function()
{
personOneTalk.innerHTML = "Hi, " + personTwoSays.value + "! How are you doing?";
submitButton.style.display = "none";
personTwoSays.value = "";

var submitButtonTwo = document.createElement("button");

submitButtonTwo.innerHTML = "Submit";
submitButtonTwo.setAttribute("id", "submitButtonTwo");
personTwoTalk.appendChild(submitButtonTwo);

submitButtonTwo.onclick = function()
{

if(personTwoSays.value == "good")
{
personOneTalk.innerHTML = "Nice to hear!";
}

else if(personTwoSays.value == "not good")
{
personOneTalk.innerHTML = "I'm sorry to hear that";
}

else
{
personOneTalk.innerHTML = "Can you please repeat yourself?";
}

submitButtonTwo.style.display = "none";
personTwoSays.value = "";
};

};