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

var conversationPart = 0;

var submitButtonTwo = document.createElement("button");
var submitButtonTired = document.createElement("button");
var submitButtonYourInterests = document.createElement("button");
var submitButtonRestartTopicCondition = document.createElement("button");
var submitButtonInterestsYouSilly = document.createElement("button");
var submitButtonInterests = document.createElement("button");
var submitButtonFour = document.createElement("button");
var submitButtonThree = document.createElement("button");

personTwoSays.onkeypress = function(event)
{

    if(event.keyCode == 13 && conversationPart == 0)
    {
        submitButton.click();
    }

    else if(event.keyCode == 13 && conversationPart == 1)
    {
        submitButtonTwo.click();
    }

    else if(event.keyCode == 13 && conversationPart == 2)
    {
        submitButtonTired.click();
    }

    else if(event.keyCode == 13 && conversationPart == 3)
    {
        submitButtonYourInterests.click();
    }

    else if(event.keyCode == 13 && conversationPart == 4)
    {
        submitButtonRestartTopicCondition.click();
    }

    else if(event.keyCode == 13 && conversationPart == 5)
    {
        submitButtonInterestsYouSilly.click();
    }

    else if(event.keyCode == 13 && conversationPart == 6)
    {
        submitButtonInterests.click();
    }

    else if(event.keyCode == 13 && conversationPart == 7)
    {
        submitButtonFour.click();
    }

    else if(event.keyCode == 13 && conversationPart == 8)
    {
        submitButtonThree.click();
    }

};

submitButton.onclick = function()
{
    conversationPart = 1;

    //Randomize second greeting
    var secondGreeting = ["How are you doing?", "How are you feeling?", "What's up?"];
    var randomString = Math.floor(Math.random() * secondGreeting.length);

    personOneTalk.innerHTML = "Hi, " + personTwoSays.value + "! " + secondGreeting[randomString];

    submitButton.style.display = "none";
    personTwoSays.value = "";

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
            var personOneReply = ["I'm sorry to hear that!", "Oh well!"];
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

        else if(personTwoReply == "tired")
        {
            var personOneReply = ["Why are you tired?", "How many hours of sleep did you get last night?"];
            var randomString = Math.floor(Math.random() * personOneReply.length);

            personOneTalk.innerHTML = personOneReply[randomString];

            feeling = "tired";
        }

        else
        {
            var personOneReply = ["Can you please repeat yourself?", "Again please?"];
            var randomString = Math.floor(Math.random() * personOneReply.length);

            personOneTalk.innerHTML = personOneReply[randomString];
        }

        if(feeling == "tired")
        {
            conversationPart = 2;

            submitButtonTwo.style.display = "none";
            personTwoSays.value = "";

            submitButtonTired.innerHTML = "Submit";

            personTwoTalk.appendChild(submitButtonTired);

            submitButtonTired.onclick = function()
            {
                var tiredCondition;

                if(personOneTalk.innerHTML == "Why are you tired?")
                {
                    tiredCondition = 1;

                    tired();
                }

                else if(personOneTalk.innerHTML == "How many hours of sleep did you get last night?")
                {
                    tiredCondition = 2;

                    tired();
                }

                function tired()
                {

                    if(tiredCondition == 1)
                    {
                        conversationPart = 3;

                        personOneTalk.innerHTML = "I hope you have a better sleep tonight! What are your interests?";

                        personTwoSays.value = "";
                        submitButtonTired.style.display = "none";

                        submitButtonYourInterests.innerHTML = "Submit";
                        personTwoTalk.appendChild(submitButtonYourInterests);

                        submitButtonYourInterests.onclick = function()
                        {
                            submitButtonYourInterests.style.display = "none";

                            conversationStarter();
                        };

                    }

                    else if(tiredCondition == 2)
                    {
                        var normalSleep = 8;

                        if(personTwoSays.value == "zero")
                        {
                            personTwoSays.value = 0;
                        }

                        else if(personTwoSays.value == "one")
                        {
                            personTwoSays.value = 1;
                        }

                        else if(personTwoSays.value == "two")
                        {
                            personTwoSays.value = 2;
                        }

                        else if(personTwoSays.value == "three")
                        {
                            personTwoSays.value = 3;
                        }

                        else if(personTwoSays.value == "four")
                        {
                            personTwoSays.value = 4;
                        }

                        else if(personTwoSays.value == "five")
                        {
                            personTwoSays.value = 5;
                        }

                        else if(personTwoSays.value == "six")
                        {
                            personTwoSays.value = 6;
                        }

                        else if(personTwoSays.value == "seven")
                        {
                            personTwoSays.value = 7;
                        }

                        else if(personTwoSays.value == "eight")
                        {
                            personTwoSays.value = 8;
                        }

                        else if(personTwoSays.value == "nine")
                        {
                            personTwoSays.value = 9;
                        }

                        else if(personTwoSays.value == "ten")
                        {
                            personTwoSays.value = 10;
                        }

                        if(parseInt(personTwoSays.value, 10) == normalSleep)
                        {
                            conversationPart = 5;

                            personOneTalk.innerHTML = personTwoSays.value + " hours of sleep is normal, so nice try! What are your interests?"

                            personTwoSays.value = "";
                            submitButtonTired.style.display = "none";

                            submitButtonInterestsYouSilly.innerHTML = "Submit";
                            personTwoTalk.appendChild(submitButtonInterestsYouSilly);

                            submitButtonInterestsYouSilly.onclick = function()
                            {
                                submitButtonInterestsYouSilly.style.display = "none";

                                conversationStarter();
                            };

                        }

                        else if(parseInt(personTwoSays.value, 10) < normalSleep)
                        {
                            conversationPart = 6;

                            var hoursOfSleep = personTwoSays.value;
                            var extraSleepNeeded = normalSleep - parseInt(hoursOfSleep, 10);

                            personOneTalk.innerHTML = "Make sure to get " + extraSleepNeeded + " more hours of sleep tonight! What are your interests?";

                            personTwoSays.value = "";
                            submitButtonTired.style.display = "none";

                            submitButtonInterests.innerHTML = "Submit";
                            personTwoTalk.appendChild(submitButtonInterests);

                            submitButtonInterests.onclick = function()
                            {
                                submitButtonInterests.style.display = "none";

                                conversationStarter();
                            };

                        }

                    }

                };

            }

        }

        else if(feeling == "bored")
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

            var submitButtonMoveOn = document.createElement("button");

            function bored()
            {

                if(boredCondition == 1)
                {
                    submitButtonBored.onclick = function()
                    {
                        personOneTalk.innerHTML = "Let's move on! What are your interests?";

                        personTwoSays.value = "";
                        submitButtonBored.style.display = "none";

                        submitButtonMoveOn.innerHTML = "Submit";
                        personTwoTalk.appendChild(submitButtonMoveOn);

                        submitButtonMoveOn.onclick = function()
                        {
                            submitButtonMoveOn.style.display = "none";

                            conversationStarter();
                        };

                    };

                }

                else if(boredCondition == 2)
                {
                    submitButtonBored.onclick = function()
                    {

                        if(personTwoSays.value == "yes")
                        {
                            personOneTalk.innerHTML = "Thank G-D! What are your interests?";

                            personTwoSays.value = "";
                            submitButtonBored.style.display = "none";

                            submitButtonMoveOn.innerHTML = "Submit";
                            personTwoTalk.appendChild(submitButtonMoveOn);

                            submitButtonMoveOn.onclick = function()
                            {
                                submitButtonMoveOn.style.display = "none";

                                conversationStarter();
                            };

                        }

                        else if(personTwoSays.value == "no")
                        {
                            personOneTalk.innerHTML = "What's wrong?";

                            personTwoSays.value = "";
                            submitButtonBored.style.display = "none";

                            submitButtonMoveOn.innerHTML = "Submit";
                            personTwoTalk.appendChild(submitButtonMoveOn);

                            submitButtonMoveOn.onclick = function()
                            {
                                personOneTalk.innerHTML = "Just get over it! What are your interests?";

                                personTwoSays.value = "";
                                submitButtonMoveOn.style.display = "none";

                                var submitButtonReallyMoveOn = document.createElement("button");

                                submitButtonReallyMoveOn.innerHTML = "Submit";
                                personTwoTalk.appendChild(submitButtonReallyMoveOn);

                                submitButtonReallyMoveOn.onclick = function()
                                {
                                    submitButtonReallyMoveOn.style.display = "none";

                                    conversationStarter();
                                };

                            };

                        }

                    };

                }

            };

        }

        else if(feeling == "good" || feeling == "bad")
        {
            conversationPart = 8;

            submitButtonTwo.style.display = "none";
            personTwoSays.value = "";

            submitButtonThree.innerHTML = "Submit";

            personTwoTalk.appendChild(submitButtonThree);

            submitButtonThree.onclick = function()
            {
                submitButtonThree.style.display = "none";

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
                conversationPart = 4;

                var personOneReply = ["I don't know of that topic. What other topics are you interested in?", "Can you please pick a topic that I know of?"];
                var randomString = Math.floor(Math.random() * personOneReply.length);

                personOneTalk.innerHTML = personOneReply[randomString];

                submitButtonRestartTopicCondition.innerHTML = "Submit";
                personTwoTalk.appendChild(submitButtonRestartTopicCondition);

                submitButtonRestartTopicCondition.style.display = "inline";

                submitButtonRestartTopicCondition.onclick = function()
                {
                    submitButtonRestartTopicCondition.style.display = "none";

                    conversationStarter();
                };

            }

            function topicFeed()
            {
                personTwoSays.value = "";

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
                        conversationPart = 7;

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