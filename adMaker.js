var targetedPerson = "";
var message = "";
var aniTimeout;
var tootClick = 0;
var votes = 0;
var totalVotes = 0;
console.log(localStorage.getItem('usersVote'))
document.getElementById("message").style.display = "none";
document.getElementById("loader").style.display = "none";
document.getElementById("loaderLabel").style.display = "none";
document.getElementById("continue").style.display = "none";
document.getElementById("endorsementMessage").innerHTML = "Endorsed by " + localStorage.getItem("userName");

function startGame(){
    tootClick += 1;
    if(tootClick == 1){
        document.getElementById("tutorialPopup").style.display = "none";
    }else if(tootClick == 2){
        window.location.replace("end.html");
    }
}

function setTarget(target){
    if(target == 1){
        targetedPerson = "self";
        votes += 3;
        totalVotes = parseInt(localStorage.getItem("usersVotes")) + votes;
        document.getElementById('targetPerson').src = localStorage.getItem('avatar')
        document.getElementById('targetPersonName').innerHTML = "A message from " + localStorage.getItem('userName').toUpperCase();
    }else if(target == 2){
        votes += 2;
        totalVotes = parseInt(localStorage.getItem("usersVotes")) + votes;
        targetedPerson = "opponent";
        document.getElementById('targetPerson').src = "assets/opponent.png";
        document.getElementById('targetPersonName').innerHTML = "A message from " + localStorage.getItem('userName') + " about Tim Joe";
    }
    console.log(targetedPerson);
    document.getElementById('forOrAgainst').style.display = "none";
    document.getElementById("message").style.display = "block";
}

function setMessage(){
    message = document.getElementById("usersMessage").value;
    document.getElementById("creatorsMessage").innerHTML = message;
    document.getElementById("message").style.display = "none";
    document.getElementById("loader").style.display = "block";
    document.getElementById("loaderLabel").style.display = "block";
    aniTimeout = setTimeout(showAd, 1500);
}
function showAd(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("loaderLabel").style.display = "none";
    document.getElementById("completeAd").style.display = "block";
    document.getElementById("continue").style.display = "block";
}
function endGame(){
    console.log(totalVotes);
    document.getElementById("tutorialPopup").style.display = "block";
    if(totalVotes >= 10){
        document.getElementById('tootMessage').innerHTML = "You've won the race, congratulations!! Your ad brought in " + votes + " votes! For a total of " + totalVotes + " votes!!"
    }else{
        document.getElementById('tootMessage').innerHTML = "Shucks!! You didn't quite make it, Tim Joe ended up with more votes. Don't be discouraged! You can try again!"
    }
}