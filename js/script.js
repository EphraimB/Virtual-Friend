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

else if(currentHours == 0)
{
currentHoursTwelveHourMode = currentHours + 12;
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

var personTwoReply = personTwoSays.value.toLowerCase();

if(personTwoReply == "good" || personTwoReply == "awesome")
{
personOneTalk.innerHTML = "Nice to hear!";

condition = true;
}

else if(personTwoReply == "not good")
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

var appropiateForConversation = 0;

submitButtonThree.onclick = function conversationStarter()
{
var personTwoReply = personTwoSays.value.toLowerCase();

if((personTwoReply == "can we talk about technology?" && appropiateForConversation == 0) || (personTwoReply == "technology" && appropiateForConversation == 1))
{
var topic = "1019";
topicFeed();
}

else if((personTwoReply == "can we talk about movies?" && appropiateForConversation == 0) || (personTwoReply == "movies" && appropiateForConversation == 1))
{
var topic = "1045";
topicFeed();
}

else
{
appropiateForConversation = 1;

personOneTalk.innerHTML = "I don't know of that topic. What other topics are you interested in?";

personTwoSays.setAttribute("placeholder", "Type reply...");
}

function topicFeed()
{
personTwoSays.value = "";
submitButtonThree.style.display = "none";

var submitButtonFour = document.createElement("button");

submitButtonFour.innerHTML = "Submit";
personTwoTalk.appendChild(submitButtonFour);
personTwoSays.setAttribute("placeholder", "Type reply...");

//Get the latest technology news from the internet

//Fetch the RSS feed
var request = new XMLHttpRequest();

request.open("GET", "http://www.npr.org/rss/rss.php?id=" + topic, true);
request.send();

request.onreadystatechange = function()
{

if(request.readyState == 4 && request.status == 200)
{
var xmlDoc = request.responseXML;

var title = xmlDoc.getElementsByTagName("title")[2];

var titleValue = title.childNodes[0];

personOneTalk.innerHTML = "Sure! Have you heard that " + titleValue.nodeValue + "?";

submitButtonFour.onclick = function()
{
personTwoSays.value = "";

var description = xmlDoc.getElementsByTagName("description")[1];

personOneTalk.innerHTML = description.childNodes[0].nodeValue;
};

}

else
{

}

};

};

};

};

};

};