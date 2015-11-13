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
var clock = document.getElementById("clock");

var greeting;

function updateClock()
{
var currentTime = new Date();
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes();
var AMOrPM;

if(currentHours < 12)
{
AMOrPM = "AM";
}

else if(currentHours >= 12)
{
AMOrPM = "PM";
}

else
{
AMOrPM = "";
}

var currentHoursTwelveHourMode;

if((currentHours >= 13) && (currentHours < 24))
{
currentHoursTwelveHourMode = currentHours - 12;
}

else
{
currentHoursTwelveHourMode = currentHours;
}

var currentMinutesCorrectlyFormatted;

if((currentMinutes >= 0) && (currentMinutes < 10))
{
currentMinutesCorrectlyFormatted = "0" + currentMinutes;
}

else
{
currentMinutesCorrectlyFormatted = currentMinutes;
}

clock.innerHTML = currentHoursTwelveHourMode + ":" + currentMinutesCorrectlyFormatted + " " + AMOrPM;

var image;

if((currentHours >= 6) && (currentHours < 12))
{
image = "url(images/morning.jpg)";
}

else if((currentHours == 5) && (currentMinutes >= 50))
{
image = "url(images/sunrise.jpg)";
}

else if((currentHours == 17) && (currentMinutes >= 50))
{
image = "url(images/sunset.jpg)";
}

else if((currentHours >= 12) && (currentHours <= 17))
{
image = "url(images/afternoon.jpg)";
}

else if((currentHours >= 18) && (currentHours < 24))
{
image = "url(images/night.jpg)";
}

else if((currentHours >= 0) && (currentHours <= 5))
{
image = "url(images/night.jpg)";
}

else
{
image = "";
}

document.body.style.background = image + "no-repeat center center fixed";
document.body.style.backgroundSize = "cover";

if((currentHours >= 0) && (currentHours < 12))
{
greeting = "Good morning";
}

else if((currentHours >= 12) && (currentHours < 18))
{
greeting = "Good afternoon";
}

else if((currentHours >= 18) && (currentHours < 24))
{
greeting = "Good evening";
}

else
{
greeting = "Hello";
}

};

updateClock();

personOneTalk.innerHTML = greeting + "! What's your name?";

document.body.onload = setInterval("updateClock()", 1000);

submitButton.onclick = function howYouDoing()
{
//Randomize second greeting
var secondGreeting = ["How are you doing?", "What's new?", "What's up?"];
var randomString = Math.floor(Math.random() * secondGreeting.length);

personOneTalk.innerHTML = "Hi, " + personTwoSays.value + "! " + secondGreeting[randomString];

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

submitButtonThree.onclick = function conversationStarter()
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

submitButtonFour.onclick = function conversation()
{

if(personTwoSays.value == "Technology")
{
//Get the latest technology news from the internet

}

else
{
personOneTalk.innerHTML = "I don't know of that topic. What other topics are you interested in?";
}

personTwoSays.value = "";
}

}

};

};

};

};