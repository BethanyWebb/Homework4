function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;

    if (question1 == "prompt") {
        correct++;
}
    if (question2 == "querySelector") {
        correct++
}
    if (question3 == "A true or false statement") {
        correct++
}




document.getElementById("start") 


document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = ("you got " + correct + " correct");
}


function clock() {
    var myTimer = setInterval(myClock, 1000);
    var c = 30;

    function myClock() {
      document.getElementById("timer").innerHTML = --c;
      if (c == 0) {
        clearInterval(myTimer);
        alert("Time's up!");
        // newdiv.text("Time's up!");
        // $("#emptydiv").append(newdiv);
      }
    }
  }

$("#start").on("click", function() {
    $("#quiz").css( "visibility","visible" );
    console.log("test")
});

var initialsInput = document.querySelector("#initials-text");
var initialsForm = document.querySelector("#initials-form");
var initialsList = document.querySelector("#initials-list");
var initialsCountSpan = document.querySelector("#initials-count");

var initials = "bw";

renderInitials();

function renderInitials() {
  // Clear todoList element and update todoCountSpan
  initialsList.innerHTML = "";
  initialsCountSpan.textContent = initials.length;

  // Render a new li for each todo
  for (var i = 0; i < initials.length; i++) {
    var initials = initials[i];

    var li = document.createElement("li");
    li.textContent = initials;
    initialsList.appendChild(li);
    console.log("that worked");
  }
}

// When form is submitted...
initialsForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var initialsText = initialsInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (initialsText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  initials.push(initialsText);
  initialsInput.value = "";

  // Re-render the list
  renderInitials();
});


