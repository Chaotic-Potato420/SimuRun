const avatarsURLS = ['assets/femaleAvatar.png','assets/nonbinaryAvatar.png','assets/maleAvatar.png'];
var nextAvatar = 1;
var opponent = "";
var usersName = "";
var clicked = 0;
document.getElementById('currentAvatar').src = avatarsURLS[0];
document.getElementById("userName").style.display = "none";
document.getElementById("tutorialPopup").style.display = "none";
document.getElementById("topics").style.display = "none";
if(localStorage.getItem("partyChoice") == "d"){
    opponent = "Democrat";
    localStorage.setItem('opponentParty', opponent);
    console.log("opponent party saved");
}else{
    opponent = "Republican";
    localStorage.setItem('opponentParty', opponent);
    console.log("opponent party saved");
}

function next(){
    console.log(nextAvatar);
    document.getElementById('currentAvatar').src = avatarsURLS[nextAvatar];
    nextAvatar += 1;
    if(nextAvatar == 3){
        nextAvatar = 0;
    }
}
function setAvatar(){
    console.log("avatar saved");
    if(avatarsURLS[nextAvatar - 1] == undefined){
        localStorage.setItem('avatar', "assets/maleAvatar.png")
    }else{
        localStorage.setItem('avatar', avatarsURLS[nextAvatar - 1]);
    }
    document.getElementById('avatarsContainer').style.display = "none";
    document.getElementById("nameInput").focus();
    document.getElementById("userName").style.display = "block";
}

function setUserName(){
    document.getElementById("userName").style.display = "none";
    document.getElementById("tutorialPopup").style.display = "block";
    document.getElementById("topics").style.display = "block";
    usersName = document.getElementById("nameInput").value;
    localStorage.setItem('userName', usersName);
    console.log("name saved")
}

function startGame(){
    document.getElementById("tutorialPopup").style.display = "none";
}

function setStance(stance){
    clicked += 1;
    console.log(clicked)
    if(clicked == 1){
        if(stance == 1){
            console.log("demo stance");
            document.getElementById("topicQuestion").innerHTML = "Do you support gun control?";
            document.getElementById('demoAns').value = "Yes";
            document.getElementById('repAns').value = "No";
            localStorage.setItem('stanceOne', 'd');
        }else if(stance == 2){
            console.log("rep stance");
            document.getElementById("topicQuestion").innerHTML = "Do you support gun control?";
            document.getElementById('demoAns').value = "Yes";
            document.getElementById('repAns').value = "No";
            localStorage.setItem('stanceOne', 'r');
        }
    }
    if(clicked == 2){
        if(stance == 1){
            console.log("demo stance");
            document.getElementById("topicQuestion").innerHTML = "Do you believe in climate change/global warming?";
            document.getElementById('demoAns').value = "I do, I want to help.";
            document.getElementById('repAns').value = "I do not, there is no such thing.";
            localStorage.setItem('stanceTwo', 'd');
        }else if(stance == 2){
            console.log("rep stance");
            document.getElementById("topicQuestion").innerHTML = "Do you believe in climate change/global warming?";
            document.getElementById('demoAns').value = "I do, I want to help.";
            document.getElementById('repAns').value = "I do not, there is no such thing.";
            localStorage.setItem('stanceTwo', 'r');
        }
    }
    if(clicked == 3){
        if(stance == 1){
            console.log("demo stance");
            document.getElementById('topics').style.display = "none";
            localStorage.setItem('stanceThree', 'd');
            window.location.replace('vpPick.html');
        }else if(stance == 2){
            console.log("rep stance");
            document.getElementById('topics').style.display = "none";
            localStorage.setItem('stanceThree', 'r');
            window.location.replace('vpPick.html');
        }
    }
}