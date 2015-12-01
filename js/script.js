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
var submitButtonBored = document.createElement("button");
var submitButtonMoveOn = document.createElement("button");
var submitButtonReallyMoveOn = document.createElement("button");
var submitButtonYourStoredInterests = document.createElement("button");
var submitButtonAnyInterests = document.createElement("button");
var submitButtonInterestsAgain = document.createElement("button");
var submitButtonOnlyInterestConfirm = document.createElement("button");
var submitButtonRestartInterestCondition = document.createElement("button");
var submitButtonOtherInterests = document.createElement("button");

var yourInterests = [];
var otherInterestsOn = false;

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

    else if(event.keyCode == 13 && conversationPart == 9)
    {
        submitButtonBored.click();
    }

    else if(event.keyCode == 13 && conversationPart == 10)
    {
        submitButtonMoveOn.click();
    }

    else if(event.keyCode == 13 && conversationPart == 11)
    {
        submitButtonReallyMoveOn.click();
    }

    else if(event.keyCode == 13 && conversationPart == 12)
    {
        submitButtonYourStoredInterests.click();
    }

    else if(event.keyCode == 13 && conversationPart == 13)
    {
        submitButtonAnyInterests.click();
    }

    else if(event.keyCode == 13 && conversationPart == 14)
    {
        submitButtonInterestsAgain.click();
    }

    else if(event.keyCode == 13 && conversationPart == 15)
    {
        submitButtonOnlyInterestConfirm.click();
    }

    else if(event.keyCode == 13 && conversationPart == 16)
    {
        submitButtonRestartInterestCondition.click();
    }

    else if(event.keyCode == 13 && conversationPart == 17)
    {
        submitButtonOtherInterests.click();
    }

};

function keywordInFullSentance(keyword, fullSentance)
{
    return fullSentance.split(" ").some(function(findTheKeyword)
    {
        return findTheKeyword == keyword;
    });

};

function keyCharacterInFullSentance(keyCharacter, fullSentance)
{
    return fullSentance.split("").some(function(findTheKeyCharacter)
    {
        return findTheKeyCharacter == keyCharacter;
    });

};

function capitalize(word)
{
    return word.charAt(0).toUpperCase() + word.slice(1);
};

submitButton.onclick = function()
{
    conversationPart = 1;

    //Randomize second greeting
    var secondGreeting = ["How are you doing?", "How are you feeling?", "What's up?"];
    var randomString = Math.floor(Math.random() * secondGreeting.length);

    var name = personTwoSays.value.toLowerCase();
    var space;

    if(keywordInFullSentance("is", name))
    {
        var beforeName = name.search("is");

        name = name.slice(beforeName + 3);
    }

    if(keyCharacterInFullSentance(" ", name))
    {
        var nameSplit = name.search(" ");

        var firstName = name.slice(0, nameSplit);
        var lastName = name.slice(nameSplit + 1);
        space = " ";
    }

    else
    {
        var firstName = name;
        var lastName = "";
        space = "";
    }

    personOneTalk.innerHTML = "Hi, " + capitalize(firstName) + space + capitalize(lastName) + "! " + secondGreeting[randomString];

    submitButton.style.display = "none";
    personTwoSays.value = "";

    submitButtonTwo.innerHTML = "Submit";
    personTwoTalk.appendChild(submitButtonTwo);

    submitButtonTwo.onclick = function()
    {
        var feeling;

        var personTwoReply = personTwoSays.value.toLowerCase();

        if(keywordInFullSentance("good", personTwoReply) || keywordInFullSentance("good!", personTwoReply) || keywordInFullSentance("good.", personTwoReply) || keywordInFullSentance("good,", personTwoReply) || keywordInFullSentance("awesome", personTwoReply) || keywordInFullSentance("awesome!", personTwoReply) || keywordInFullSentance("awesome.", personTwoReply) || keywordInFullSentance("awesome,", personTwoReply) || keywordInFullSentance("well", personTwoReply) || keywordInFullSentance("well!", personTwoReply) || keywordInFullSentance("well.", personTwoReply) || keywordInFullSentance("well,", personTwoReply) || keywordInFullSentance("ok", personTwoReply) || keywordInFullSentance("ok!", personTwoReply) || keywordInFullSentance("ok.", personTwoReply) || keywordInFullSentance("okay", personTwoReply) || keywordInFullSentance("okay!", personTwoReply) || keywordInFullSentance("okay.", personTwoReply))
        {
            var personOneReply = ["Nice to hear!", "I'm happy for you!"];
            var randomString = Math.floor(Math.random() * personOneReply.length);

            personOneTalk.innerHTML = personOneReply[randomString];

            if(keywordInFullSentance("you", personTwoReply) || keywordInFullSentance("you?", personTwoReply))
            {
                personOneTalk.innerHTML += " I'm feeling good too!";
            }

            personOneTalk.innerHTML += " What are your interests?";

            feeling = "good";
        }

        else if(keywordInFullSentance("horrible", personTwoReply) || keywordInFullSentance("horrible!", personTwoReply) || keywordInFullSentance("horrible.", personTwoReply) || keywordInFullSentance("horrible,", personTwoReply) || keywordInFullSentance("bad", personTwoReply) || keywordInFullSentance("bad!", personTwoReply) || keywordInFullSentance("bad.", personTwoReply) || keywordInFullSentance("bad,", personTwoReply))
        {
            var personOneReply = ["I'm sorry to hear that!", "Oh well!"];
            var randomString = Math.floor(Math.random() * personOneReply.length);

            personOneTalk.innerHTML = personOneReply[randomString];

            if(keywordInFullSentance("you", personTwoReply) || keywordInFullSentance("you?", personTwoReply))
            {
                personOneTalk.innerHTML += " I'm feeling good.";
            }

            personOneTalk.innerHTML += " What are your interests?";

            feeling = "bad";
        }

        else if(keywordInFullSentance("bored", personTwoReply) || keywordInFullSentance("bored!", personTwoReply) || keywordInFullSentance("bored.", personTwoReply) || keywordInFullSentance("bored,", personTwoReply))
        {
            var personOneReply = ["Why are you bored?", "Is everything okay?"];
            var randomString = Math.floor(Math.random() * personOneReply.length);

            personOneTalk.innerHTML = "";

            if(keywordInFullSentance("you", personTwoReply) || keywordInFullSentance("you?", personTwoReply))
            {
                personOneTalk.innerHTML = "I'm feeling good. ";
            }

            personOneTalk.innerHTML += personOneReply[randomString];

            feeling = "bored";
        }

        else if(keywordInFullSentance("tired", personTwoReply) || keywordInFullSentance("tired!", personTwoReply) || keywordInFullSentance("tired.", personTwoReply) || keywordInFullSentance("tired,", personTwoReply))
        {
            var personOneReply = ["Why are you tired?", "How many hours of sleep did you get last night?"];
            var randomString = Math.floor(Math.random() * personOneReply.length);

            personOneTalk.innerHTML = "";

            if(keywordInFullSentance("you", personTwoReply) || keywordInFullSentance("you?", personTwoReply))
            {
                personOneTalk.innerHTML = "I'm feeling good. ";
            }

            personOneTalk.innerHTML += personOneReply[randomString];

            feeling = "tired";
        }

        else
        {
            var personOneReply = ["Can you please repeat yourself?", "Again please?"];
            var randomString = Math.floor(Math.random() * personOneReply.length);

            personOneTalk.innerHTML = personOneReply[randomString];

            personTwoSays.value = "";
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
                    var personTwoReply = personTwoSays.value.toLowerCase();

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

                            interests();
                        };

                    }

                    else if(tiredCondition == 2)
                    {
                        var normalSleep = 8;

                        if(keywordInFullSentance("zero", personTwoReply))
                        {
                            personTwoSays.value = 0;
                        }

                        else if(keywordInFullSentance("one", personTwoReply))
                        {
                            personTwoSays.value = 1;
                        }

                        else if(keywordInFullSentance("two", personTwoReply))
                        {
                            personTwoSays.value = 2;
                        }

                        else if(keywordInFullSentance("three", personTwoReply))
                        {
                            personTwoSays.value = 3;
                        }

                        else if(keywordInFullSentance("four", personTwoReply))
                        {
                            personTwoSays.value = 4;
                        }

                        else if(keywordInFullSentance("five", personTwoReply))
                        {
                            personTwoSays.value = 5;
                        }

                        else if(keywordInFullSentance("six", personTwoReply))
                        {
                            personTwoSays.value = 6;
                        }

                        else if(keywordInFullSentance("seven", personTwoReply))
                        {
                            personTwoSays.value = 7;
                        }

                        else if(keywordInFullSentance("eight", personTwoReply))
                        {
                            personTwoSays.value = 8;
                        }

                        else if(keywordInFullSentance("nine", personTwoReply))
                        {
                            personTwoSays.value = 9;
                        }

                        else if(keywordInFullSentance("ten", personTwoReply))
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

                                interests();
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

                                interests();
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

                if(boredCondition == 1)
                {
                    conversationPart = 9;

                    submitButtonBored.onclick = function()
                    {
                        conversationPart = 10;

                        personOneTalk.innerHTML = "Let's move on! What are your interests?";

                        personTwoSays.value = "";
                        submitButtonBored.style.display = "none";

                        submitButtonMoveOn.innerHTML = "Submit";
                        personTwoTalk.appendChild(submitButtonMoveOn);

                        submitButtonMoveOn.onclick = function()
                        {
                            submitButtonMoveOn.style.display = "none";

                            interests();
                        };

                    };

                }

                else if(boredCondition == 2)
                {
                    conversationPart = 9;

                    submitButtonBored.onclick = function()
                    {
                        var personTwoReply = personTwoSays.value.toLowerCase();

                        if(personTwoReply == "yes")
                        {
                            conversationPart = 10;

                            personOneTalk.innerHTML = "Thank G-D! What are your interests?";

                            personTwoSays.value = "";
                            submitButtonBored.style.display = "none";

                            submitButtonMoveOn.innerHTML = "Submit";
                            personTwoTalk.appendChild(submitButtonMoveOn);

                            submitButtonMoveOn.onclick = function()
                            {
                                submitButtonMoveOn.style.display = "none";

                                interests();
                            };

                        }

                        else if(personTwoReply == "no")
                        {
                            conversationPart = 10;

                            personOneTalk.innerHTML = "What's wrong?";

                            personTwoSays.value = "";
                            submitButtonBored.style.display = "none";

                            submitButtonMoveOn.innerHTML = "Submit";
                            personTwoTalk.appendChild(submitButtonMoveOn);

                            submitButtonMoveOn.onclick = function()
                            {
                                conversationPart = 11;

                                personOneTalk.innerHTML = "Just get over it! What are your interests?";

                                personTwoSays.value = "";
                                submitButtonMoveOn.style.display = "none";

                                submitButtonReallyMoveOn.innerHTML = "Submit";
                                personTwoTalk.appendChild(submitButtonReallyMoveOn);

                                submitButtonReallyMoveOn.onclick = function()
                                {
                                    submitButtonReallyMoveOn.style.display = "none";

                                    interests();
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

                interests();
            };

        }

        function interests()
        {
            conversationPart = 12;

            var personTwoReply = personTwoSays.value.toLowerCase();

            if(keywordInFullSentance("technology", personTwoReply) || keywordInFullSentance("technology,", personTwoReply))
            {
                yourInterests.push("technology");
            }

            if(keywordInFullSentance("movies", personTwoReply) || keywordInFullSentance("movies,", personTwoReply))
            {
                yourInterests.push("movies");
            }

            if(keywordInFullSentance("sports", personTwoReply) || keywordInFullSentance("sports,", personTwoReply))
            {
                yourInterests.push("sports");
            }

            if(keywordInFullSentance("politics", personTwoReply) || keywordInFullSentance("politics,", personTwoReply))
            {
                yourInterests.push("politics");
            }

            if(keywordInFullSentance("food", personTwoReply) || keywordInFullSentance("food,", personTwoReply))
            {
                yourInterests.push("food");
            }

            if(keywordInFullSentance("music", personTwoReply) || keywordInFullSentance("music,", personTwoReply))
            {
                yourInterests.push("music");
            }

            if((yourInterests.length > 1 && otherInterestsOn == false) || ((yourInterests.length - 1) > 1 && otherInterestsOn == true))
            {
                personOneTalk.innerHTML = "Out of your " + yourInterests.length + " interests, which is your favorite?";

                personTwoSays.value = "";

                submitButtonYourStoredInterests.innerHTML = "Submit";
                personTwoTalk.appendChild(submitButtonYourStoredInterests);

                submitButtonYourStoredInterests.onclick = function()
                {
                    submitButtonYourStoredInterests.style.display = "none";

                    conversationStarter();
                };

            }

            else if(yourInterests.length == 1 && otherInterestsOn == false)
            {
                conversationPart = 15;

                personOneTalk.innerHTML = "Is " + yourInterests + " your only interest?";

                personTwoSays.value = "";

                submitButtonOnlyInterestConfirm.innerHTML = "Submit";
                personTwoTalk.appendChild(submitButtonOnlyInterestConfirm);

                submitButtonOnlyInterestConfirm.onclick = function()
                {
                    submitButtonOnlyInterestConfirm.style.display = "none";
                    var personTwoReply = personTwoSays.value.toLowerCase();

                    if(keywordInFullSentance("yes", personTwoReply))
                    {
                            personTwoSays.value = yourInterests;

                            conversationStarter();
                    }

                    else if(keywordInFullSentance("no", personTwoReply))
                    {
                        conversationPart = 17;

                        personTwoSays.value = "";

                        personOneTalk.innerHTML = "Then what other interests do you have?";

                        submitButtonOtherInterests.innerHTML = "Submit";
                        personTwoTalk.appendChild(submitButtonOtherInterests);

                        submitButtonOtherInterests.onclick = function()
                        {
                            submitButtonOtherInterests.style.display = "none";

                            otherInterestsOn = true;

                            interests();
                        };

                    }

                    else
                    {
                        personTwoSays.value = "";

                        
                    }

                };

            }

            else
            {
                conversationPart = 16;

                personTwoSays.value = "";

                personOneTalk.innerHTML = "Please pick a topic that I know of";

                submitButtonRestartInterestCondition.innerHTML = "Submit";
                personTwoTalk.appendChild(submitButtonRestartInterestCondition);

                submitButtonRestartInterestCondition.style.display = "inline";

                submitButtonRestartInterestCondition.onclick = function()
                {
                    submitButtonRestartInterestCondition.style.display = "none";

                    interests();
                };

            }

        };

        function conversationStarter()
        {
            var personTwoReply = personTwoSays.value.toLowerCase();
            var grammer;

            if(keywordInFullSentance("technology", personTwoReply))
            {
                var topic = "1019";
                grammer = "about ";
                topicFeed();
            }

            else if(keywordInFullSentance("movies", personTwoReply))
            {
                var topic = "1045";
                grammer = "about ";
                topicFeed();
            }

            else if(keywordInFullSentance("sports", personTwoReply))
            {
                var topic = "1055";
                grammer = "that ";
                topicFeed();
            }

            else if(keywordInFullSentance("politics", personTwoReply))
            {
                var topic = "1014";
                grammer = "about the ";
                topicFeed();
            }

            else if(keywordInFullSentance("food", personTwoReply))
            {
                var topic = "1053";
                grammer = "that ";
                topicFeed();
            }

            else if(keywordInFullSentance("music", personTwoReply))
            {
                var topic = "1039";
                grammer = "about ";
                topicFeed();
            }

            else
            {
                conversationPart = 4;

                var personOneReply = ["I don't know of that topic. What other topics are you interested in?", "Can you please pick a topic that I know of?"];
                var randomString = Math.floor(Math.random() * personOneReply.length);

                personOneTalk.innerHTML = personOneReply[randomString];

                personTwoSays.value = "";

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

                        var topicStarter = titleValue.nodeValue.toLowerCase();

                        function topicKeywordInFullSentance(keyword)
                        {
                            return topicStarter.split(" ").some(function(findTheKeyword)
                            {
                                return findTheKeyword == keyword;
                            });

                        };

                        function topicKeyCharacterInFullSentance(keyCharacter)
                        {
                            return topicStarter.split("").some(function(findTheKeyCharacter)
                            {
                                return findTheKeyCharacter == keyCharacter;
                            });

                        };

                        if(topicKeyCharacterInFullSentance("?"))
                        {
                            titleValue.deleteData(topicStarter.length - 1, 1);
                        }

                        if(topicKeywordInFullSentance("and"))
                        {
                            var start = topicStarter.search("and");

                            titleValue.deleteData(start - 1, topicStarter.length - start);
                        }

                        if(topicKeywordInFullSentance("what") && topicKeywordInFullSentance("is"))
                        {
                            var startTwo = topicStarter.search("what");

                            titleValue.deleteData(startTwo, 7);
                        }

                        personOneTalk.innerHTML = "Have you heard " + grammer + titleValue.nodeValue + "?";

                        submitButtonFour.onclick = function()
                        {
                            conversationPart = 18;

                            personTwoSays.value = "";

                            var description = xmlDoc.getElementsByTagName("description")[1];

                            personOneTalk.innerHTML = description.childNodes[0].nodeValue;
                        };

                    }

                };

            };

        };

    };

};