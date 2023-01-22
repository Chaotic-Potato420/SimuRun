var votes = 0;
var clicked = 0;
var tootClick = 0;

document.getElementById('userAvatar').src = localStorage.getItem('avatar');
document.getElementById('user').innerHTML = localStorage.getItem('userName').toUpperCase();
document.getElementById('userBubble').style.display = "none";
document.getElementById('opponentBubble').style.display = "none";
if(localStorage.getItem('partyChoice') == 'd'){
    document.getElementById('characters').style.backgroundColor = "var(--blue)";
    document.getElementById('votes').style.backgroundColor = "var(--red)";
}else{
    document.getElementById('characters').style.backgroundColor = "var(--red)";
    document.getElementById('votes').style.backgroundColor = "var(--blue)";
}

function startGame(){
    tootClick += 1;
    if(tootClick == 1){
        document.getElementById("tutorialPopup").style.display = "none";
    }else if(tootClick == 2){
        window.location.replace('adMaker.html');
    }
}

function answerQ(answer){
    clicked += 1;
    if(clicked == 1){
        setTimeout(() => {
            document.getElementById('opponentBubble').style.display = "none";
            document.getElementById("Question").innerHTML = "How would you implement your views of gun control?";
            document.getElementById('demoAns').value = "I would regulate";
            document.getElementById('repAns').value = "I wouldn't change anything";
            document.getElementById('demoAns').disabled = false;
            document.getElementById('repAns').disabled = false;
        }, 10000);
        if(answer == 1){
            document.getElementById('demoAns').disabled = true;
            document.getElementById('repAns').disabled = true;
            document.getElementById('userBubble').style.display = "block";
            document.getElementById('userBubble').innerHTML = "I believe that victims of sexual assalt or those that cannot afford a child should have access to abortions."
            setTimeout(() => {
                document.getElementById('userBubble').style.display = "none";
                document.getElementById('opponentBubble').style.display = "block";
                document.getElementById('opponentBubble').innerHTML = "I believe that people who choose to have abortions should choose a different option such as adoption if they do not want their child."    
            }, 5000);
            if(localStorage.getItem('stanceOne') == 'd'){
                votes += 3;
                document.getElementById('voteNum').innerHTML = "Votes: " + votes;
            }
        }else if(answer == 2){
            document.getElementById('userBubble').style.display = "block";
            document.getElementById('userBubble').innerHTML = "I believe that people who choose to have abortions should choose a different option such as adoption if they do not want their child."
            setTimeout(() => {
                document.getElementById('userBubble').style.display = "none";
                document.getElementById('opponentBubble').style.display = "block";
                document.getElementById('opponentBubble').innerHTML = "I believe that victims of sexual assalt or those that cannot afford a child should have access to abortions."    
            }, 5000);
            if(localStorage.getItem('stanceOne') == 'r'){
                votes += 3;
                document.getElementById('voteNum').innerHTML = "Votes: " + votes;
            }
        }
    }
    if(clicked == 2){
        setTimeout(() => {
            document.getElementById('opponentBubble').style.display = "none";
            document.getElementById("Question").innerHTML = "Elaborate more about your views on climate change.";
            document.getElementById('demoAns').value = "We need change";
            document.getElementById('repAns').value = "I don't believe in climate change";
            document.getElementById('demoAns').disabled = false;
            document.getElementById('repAns').disabled = false;
        }, 10000);
        if(answer == 1){
            document.getElementById('demoAns').disabled = true;
            document.getElementById('repAns').disabled = true;
            document.getElementById('userBubble').style.display = "block";
            document.getElementById('userBubble').innerHTML = "I would regulate those who could buy a gun and what kind of gun they could buy."
            setTimeout(() => {
                document.getElementById('userBubble').style.display = "none";
                document.getElementById('opponentBubble').style.display = "block";
                document.getElementById('opponentBubble').innerHTML = "I wouldn't change anything, I prefer the gun laws as they are."    
            }, 5000);
            if(localStorage.getItem('stanceTwo') == 'd'){
                votes += 3;
                document.getElementById('voteNum').innerHTML = "Votes: " + votes;
            }
        }else if(answer == 2){
            document.getElementById('demoAns').disabled = true;
            document.getElementById('repAns').disabled = true;
            document.getElementById('userBubble').style.display = "block";
            document.getElementById('userBubble').innerHTML = "I wouldn't change anything, I prefer the gun laws as they are."
            setTimeout(() => {
                document.getElementById('userBubble').style.display = "none";
                document.getElementById('opponentBubble').style.display = "block";
                document.getElementById('opponentBubble').innerHTML = "I would regulate those who could buy a gun and what kind of gun they could buy."    
            }, 5000);
            if(localStorage.getItem('stanceTwo') == 'r'){
                votes += 3;
                document.getElementById('voteNum').innerHTML = "Votes: " + votes;
            }
        }
    }
    if(clicked >= 3){
        setTimeout(() => {
            document.getElementById("tutorialPopup").style.display = "block";
            document.getElementById("tootWords").innerHTML = "Congratulations you got " + votes + " votes! It's time to make an ad now!"
        }, 10000);
        if(answer == 1){
            document.getElementById('demoAns').disabled = true;
            document.getElementById('repAns').disabled = true;
            document.getElementById('userBubble').style.display = "block";
            document.getElementById('userBubble').innerHTML = "Climate change is real and we must do something about it very quickly. If we dont' there won't be a planet for future generations."
            setTimeout(() => {
                document.getElementById('userBubble').style.display = "none";
                document.getElementById('opponentBubble').style.display = "block";
                document.getElementById('opponentBubble').innerHTML = "I, personally, do not believe that climate change is a threat, therefore, nothing needs to be implemented to change it."    
            }, 5000);
            if(localStorage.getItem('stanceThree') == 'd'){
                votes += 3;
                document.getElementById('voteNum').innerHTML = "Votes: " + votes;
            }
        }else if(answer == 2){
            document.getElementById('demoAns').disabled = true;
            document.getElementById('repAns').disabled = true;
            document.getElementById('userBubble').style.display = "block";
            document.getElementById('userBubble').innerHTML = "I, personally, do not believe that climate change is a threat, therefore, nothing needs to be implemented to change it."
            setTimeout(() => {
                document.getElementById('userBubble').style.display = "none";
                document.getElementById('opponentBubble').style.display = "block";
                document.getElementById('opponentBubble').innerHTML = "Climate change is real and we must do something about it very quickly. If we dont' there won't be a planet for future generations."    
            }, 5000);
            if(localStorage.getItem('stanceThree') == 'r'){
                votes += 3;
                document.getElementById('voteNum').innerHTML = "Votes: " + votes;
            }
        }
    }
    localStorage.setItem('usersVotes', votes);
    console.log(localStorage.getItem('usersVotes'));
    console.log("Votes: " + votes + " Clicked: " + clicked)
}