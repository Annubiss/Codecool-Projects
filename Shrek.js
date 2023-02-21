const noBtn = document.querySelector("#noHomo");
const yesBtn = document.querySelector("#fullHomo");
const dialogue = document.querySelector("#dialogue");
let answerBtn
let full = false;
let noFull = false;
let x = 3;
let numberOfAnswers = 3;

let dialogueProgressionNoHommo = 0;
let dialogueProgressionFullHommo = 0;
const noArray = ["Barosaneala", "Smecherie", "Ciumegareala"];
const yesArray = ["Romanta", "Anduranta", "Belire"];
const list = document.querySelector("#list");
let listItem;
noBtn.addEventListener("click", main);
yesBtn.addEventListener("click", main);

function main(event) {
  if (event.target === noBtn) {
    generateList(noArray);
    generateDialogue();
    generateAnswers(event);
    noFull = true
    full = false;
  }

  if (event.target === yesBtn) {
    generateList(yesArray);
    generateDialogue();
    generateAnswers(event);
    noFull = false;
    full = true;
  }
  generateDialogue()
  console.log(dialogueData_noHomo[0].answer1);
  console.log(answerBtn);
}

function generateList(btnAnswer) {
  
    for (let i = 0; i < list.children.length; i++) {
      listItem = list.children[i];
      listItem.textContent = btnAnswer[i] + ":";
   }
}

function generateDialogue() {
  if (noFull == true) {
    dialogueProgressionFullHommo = 0;
    dialogue.textContent = 
      dialogueData_noHomo[0 + dialogueProgressionNoHommo].dial1;
    dialogueProgressionNoHommo += 1;
    if (dialogueProgressionNoHommo == 2) {
      dialogueProgressionNoHommo = 0;
    }
  } else if (full == true) {
    dialogueProgressionNoHommo = 0
    dialogue.textContent =
      dialogueData_fullHomo[0 + dialogueProgressionFullHommo].dial1;
    dialogueProgressionFullHommo += 1;
    if (dialogueProgressionFullHommo == 2) {
      dialogueProgressionFullHommo = 0;
    }
  }
}

function generateAnswers(event) {
  if (event.target.id == "noHomo") {
    while (numberOfAnswers > 0) {
       answerBtn = document.createElement("button");
      answerBtn.id = "answerID";
      if (numberOfAnswers == 3) {
        answerBtn.textContent = dialogueData_noHomo[0].answer1;
      } else if (numberOfAnswers == 2) {
        answerBtn.textContent = dialogueData_noHomo[0].answer2;
      } else if (numberOfAnswers == 1) {
        answerBtn.textContent = dialogueData_noHomo[0].answer3;
      }
      document.body.appendChild(answerBtn);

      answerBtn.addEventListener("click", generateDialogue);
      answerBtn.addEventListener("click", points);

      
      numberOfAnswers--;
    }
  }
  if (event.target.id == "fullHomo") {
    while (numberOfAnswers > 0) {
      answerBtn = document.createElement("button");
      answerBtn.id = "answerID";
      if (numberOfAnswers == 3) {
        answerBtn.textContent = dialogueData_fullHomo[0].answer1;
      } else if (numberOfAnswers == 2) {
        answerBtn.textContent = dialogueData_fullHomo[0].answer2;
      } else if (numberOfAnswers == 1) {
        answerBtn.textContent = dialogueData_fullHomo[0].answer3;
      }
      document.body.appendChild(answerBtn);

      answerBtn.addEventListener("click", generateDialogue);

      numberOfAnswers--;
    }
  }
 
}

function points() {
  if()
}
