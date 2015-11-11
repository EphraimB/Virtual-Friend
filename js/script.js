var submitButton = document.getElementById("submitButton");
var personOneTalk = document.getElementById("personOneTalk");
var personTwoSays = document.getElementById("personTwoSays");
var personTwoTalk = document.getElementById("personTwoTalk");
var personOne = document.getElementById("personOne");
var personTwo = document.getElementById("personTwo");
var personTwoFace = document.getElementById("personTwoFace");
var personTwoBody = document.getElementById("personTwoBody");
var personTwoLeftArm = document.getElementById("personTwoLeftArm");
var personTwoRightArm = document.getElementById("personTwoRightArm");
var personTwoLeftLeg = document.getElementById("personTwoLeftLeg");
var personTwoRightLeg = document.getElementById("personTwoRightLeg");

submitButton.onclick = function()
{
personOneTalk.innerHTML = "Hi, " + personTwoSays.value + "! How are you doing?";
submitButton.style.display = "none";
personTwoSays.value = "";

var submitButtonTwo = document.createElement("button");

submitButtonTwo.innerHTML = "Submit";
personTwoTalk.appendChild(submitButtonTwo);

submitButtonTwo.onclick = function()
{
var condition = false;

if(personTwoSays.value == "good")
{
personOneTalk.innerHTML = "Nice to hear!";

condition = true;
}

else if(personTwoSays.value == "not good")
{
personOneTalk.innerHTML = "I'm sorry to hear that";

condition = true;
}

else
{
personOneTalk.innerHTML = "Can you please repeat yourself?";
}

if(condition == true)
{
submitButtonTwo.style.display = "none";
personTwoSays.value = "";
personTwoSays.setAttribute("placeholder", "Keep the conversation going...");

var submitButtonThree = document.createElement("button");

submitButtonThree.innerHTML = "Submit";

personTwoTalk.appendChild(submitButtonThree);

submitButtonThree.onclick = function()
{
var conditionTwo = false;

if(personTwoSays.value == "What are your interests?")
{
personOneTalk.innerHTML = "Technology. What are your interests?";

conditionTwo = true;
}

else
{
personOneTalk.innerHTML = "Huh?";
}

if(conditionTwo == true)
{
submitButtonThree.style.display = "none";
personTwoSays.value = "";
personTwoSays.setAttribute("placeholder", "Type reply...");

var submitButtonFour = document.createElement("button");

submitButtonFour.innerHTML = "Submit";
personTwoTalk.appendChild(submitButtonFour);

submitButtonFour.onclick = function()
{

if(personTwoSays.value == "Technology")
{
personOneTalk.innerHTML = "Cool! We both have the same interests! Let's be friends!";

personOneTalk.style.display = "none";
personTwoTalk.style.display = "none";

//Hug
personTwoFace.style.left = "200px";
personTwoBody.style.left = "205px";
personTwoLeftArm.style.left = "105px";
personTwoRightArm.style.left = "294px";
personTwoLeftLeg.style.left = "205px";
personTwoRightLeg.style.left = "265px";
}

else
{
personOneTalk.innerHTML = "Goodbye!";

personOne.style.display = "none";
}

personTwoSays.value = "";
}

}

};

};

};

};