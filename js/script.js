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
document.body.style.backgroundSize = "100% 100%";

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
var secondGreeting = ["How are you doing?", "How are you feeling?", "What's up?"];
var randomString = Math.floor(Math.random() * secondGreeting.length);

personOneTalk.innerHTML = "Hi, " + personTwoSays.value + "! " + secondGreeting[randomString];

submitButton.style.display = "none";
personTwoSays.value = "";

var submitButtonTwo = document.createElement("button");

submitButtonTwo.innerHTML = "Submit";
personTwoTalk.appendChild(submitButtonTwo);

submitButtonTwo.onclick = function()
{
var feeling;

var personTwoReply = personTwoSays.value.toLowerCase();

if(personTwoReply == "good" || personTwoReply == "awesome")
{
var personOneReply = ["Nice to hear!", "I'm happy for you!"];
var randomString = Math.floor(Math.random() * personOneReply.length);

personOneTalk.innerHTML = personOneReply[randomString];
personOneTalk.innerHTML += " What are your interests?";

feeling = "good";
}

else if(personTwoReply == "not good" || personTwoReply == "bad")
{
var personOneReply = ["I'm sorry to hear that", "Oh well"];
var randomString = Math.floor(Math.random() * personOneReply.length);

personOneTalk.innerHTML = personOneReply[randomString];
personOneTalk.innerHTML += " What are your interests?";

feeling = "bad";
}

else if(personTwoReply == "bored")
{
var personOneReply = ["Why are you bored?", "Is everything okay?"];
var randomString = Math.floor(Math.random() * personOneReply.length);

personOneTalk.innerHTML = personOneReply[randomString];

feeling = "bored";
}

else
{
var personOneReply = ["Can you please repeat yourself?", "Again please?"];
var randomString = Math.floor(Math.random() * personOneReply.length);

personOneTalk.innerHTML = personOneReply[randomString];
}

if(feeling == "bored")
{
submitButtonTwo.style.display = "none";
personTwoSays.value = "";

var submitButtonBored = document.createElement("button");

submitButtonBored.innerHTML = "Submit";

personTwoTalk.appendChild(submitButtonBored);

var boredCondition;

if(personOneTalk.innerHTML == "Why are you bored?")
{
boredCondition = 1;

bored();
}

else if(personOneTalk.innerHTML == "Is everything okay?")
{
boredCondition = 2;

bored();
}

function bored()
{
submitButtonBored.onclick = function()
{

if(personTwoSays.value == "yes")
{
personOneTalk.innerHTML = "Thank G-D! ";

//conversationStarter();
}

else if(personTwoSays.value == "no")
{
personOneTalk.innerHTML = "What's wrong?";
}

};

};

}

else if(feeling == "good" || feeling == "bad")
{
submitButtonTwo.style.display = "none";
personTwoSays.value = "";

var submitButtonThree = document.createElement("button");

submitButtonThree.innerHTML = "Submit";

personTwoTalk.appendChild(submitButtonThree);

submitButtonThree.onclick = function()
{
conversationStarter();
};

}

function conversationStarter()
{
var personTwoReply = personTwoSays.value.toLowerCase();

if(personTwoReply == "technology")
{
var topic = "1019";
topicFeed();
}

else if(personTwoReply == "movies")
{
var topic = "1045";
topicFeed();
}

else if(personTwoReply == "sports")
{
var topic = "1055";
topicFeed();
}

else if(personTwoReply == "politics")
{
var topic = "1014";
topicFeed();
}

else if(personTwoReply == "food")
{
var topic = "1053";
topicFeed();
}

else if(personTwoReply == "music")
{
var topic = "1039";
topicFeed();
}

else
{
var personOneReply = ["I don't know of that topic. What other topics are you interested in?", "Can you please pick a topic that I know of?"];
var randomString = Math.floor(Math.random() * personOneReply.length);

personOneTalk.innerHTML = personOneReply[randomString];
}

function topicFeed()
{
personTwoSays.value = "";
submitButtonThree.style.display = "none";

var submitButtonFour = document.createElement("button");

submitButtonFour.innerHTML = "Submit";
personTwoTalk.appendChild(submitButtonFour);

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

personOneTalk.innerHTML = "Have you heard that " + titleValue.nodeValue + "?";

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