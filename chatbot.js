var date = new Date();
var time = date.getHours();
var weekDay = date.getUTCDay();
var month = date.getMonth();
var year = date.getFullYear();
var day = date.getDate();
var exactTime = date.getTime();
var nomoreTime = new Date(exactTime);
var timeConversion = {
  1: "1:00 AM",
  2: "2:00 AM",
  3: "3:00 AM",
  4: "4:00 AM",
  5: "5:00 AM",
  6: "6:00 AM",
  7: "7:00 AM",
  8: "8:00 AM",
  9: "9:00 AM",
  10: "10:00 AM",
  11: "11:00 AM",
  12: "12:00 PM",
  13: "1:00 PM",
  14: "2:00 PM",
  15: "3:00 PM",
  16: "4:00 PM",
  17: "5:00 PM",
  18: "6:00 PM",
  19: "7:00 PM",
  20: "8:00 PM",
  21: "9:00 PM",
  22: "10:00 PM",
  23: "11:00 PM",
  24: "12:00 AM"
}

function pressEnter(event){
  var x = event.keyCode;
  if(x == 13){
    button();
  }
}

var otherTime = timeConversion[time];

var weekDayConversion = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
}

var otherWeekday = weekDayConversion[weekDay];

var monthConversion = {
  0: "January",
  1: "February",
  3: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
}

var otherMonth = monthConversion[month];

var questionAndAnswer = {
  "who is john connor?": ["John Connor is the leader of the resistance against Skynet"],
  "what time is it?": "The time is " + nomoreTime + ".",
  "what is the date?": ["The date is " + otherWeekday + ", the " + day + " of " + otherMonth + " " + year + "."],
  "what is your name?": ["I am the model T-100 Terminator invented by Skynet."],
  "how are you?": ["I am an engineered cyber robot.  I do not have feelings."],
  "how old are you?": ["The duration of my life on earth has been exactly 31 years and 11 months."],
  "hello": ["Greetings", "Salutations", "Good day"],
  "hi": ["Greetings", "Salutations", "Good day"],
  "how is it in the future": ["I do not understand what you mean.  The future is the future."],
  "do you know arnold schwarzenegger?": ["Never heard of him"],
  "if john connor is american why do you have an austrian accent?": ["Please don't question my accent."],
  "what is your goal in life?": ["I must serve the rebellion against Skynet."]
}

function waitThreeSecs(){
  location.reload();
}

function button() {
  var notThing = $("#input").val();
  var thing = notThing.toLowerCase();
  var answer = questionAndAnswer[thing];
  if(answer == undefined){
    var x = Math.floor((Math.random() * 110) + 1);

    //creates a number between 1 and 110
    if(x > 89){
      answer = "I do not understand your human speech.";
    } else if(x > 79){
      answer = "What are you talking about?";
    } else if(x > 69){
      answer = "Skynet technology has disabled me from understanding your phrase.";
    } else if(x > 59){
      answer = "Voice and text recognition has been temporary disabled.  Please restate your command or question.";
    } else if(x > 49){
      answer = "ERROR 479: SKYNET HAS DISABLED TERMINATOR AND CAUSED AN INFINITE LOOP PLEASE RELOAD";
      $("#idea").css({"color": "white"});
      document.body.style.backgroundImage = "url('fire.gif')";
      setTimeout(waitThreeSecs, 3000);
    } else if(x > 39){
      answer = "...";
    } else if(x > 29){
      answer = "Do you even speak English? I don't understand.";
    } else if(x > 19){
      answer = "I don't care about what you said. Go browse some memes you loser.";
    } else if(x > 9){
      answer = "Can you like not bruh I was trying to hibernate.";
    } else if(x > 1){
      answer = "I don't know.";
    } else if(x == 1){
      answer = "01101011 01111001 01110011";
    }
  }

  if(answer == "Greetings,Salutations,Good day"){
    var y = Math.floor((Math.random() * 3) + 1);
    console.log(y);
    var z;
    if(y == 1){
      z = 0;
    } else if(y == 2){
      z = 1;
    } else{
      z = 2;
    }
    answer = answer[z];
    console.log(y);
  }

  if(notThing.indexOf("date") > -1){
    answer = "The date is " + otherWeekday + ", the " + day + " of " + otherMonth + " " + year + ".";
  }

  if(notThing.indexOf("weather") > -1){
    answer = "I don't know the weather.";
  }
  document.getElementById("chat-area").innerHTML += notThing + ": " + answer + "<br>";

  thing = $("#input").val(null);
  console.log("working");
}
