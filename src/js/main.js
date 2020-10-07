"use strict"


let questionBoxs = document.querySelectorAll('.item');
let pics = document.querySelectorAll('.pic');

for (let questionBox of questionBoxs) {
  questionBox.onclick = function () {
    if (questionBox.classList.contains('right')) {
      questionBox.style.backgroundColor = 'green';
    } else {
      questionBox.style.backgroundColor = 'red';
    }
  }
}

for (let pic of pics) {
  pic.onclick = function () {
    if (pic) {
      this.style.backgroundColor = 'transparent';
      this.style.border = 'none';
      this.textContent = '';
    } else {
      pic.style.backgroundColor = '#fff';
    }
  }
}
/*

for (let question of questionBox) {
  question.onclick = function () {
    if (question.classList.contains('right')) {
      question.style.backgroundColor = 'green';
      //return true;
      //console.log('slkdjf')
    } else {
      this.style.backgroundColor = 'red';
      //return false;
    }
  };
}



let pics = document.querySelectorAll('.pic');
for (let pic of pics) {
  if (pic) {
    this.style.backgroundColor = 'transparent';
    this.style.border = 'none';
    this.textContent = '';
  } else {
    pic.style.backgroundColor = '#fff';
  }
}


//console.log(filterBox())


let pics = document.querySelectorAll('.pic');
for (let pic of pics) {
  pic.addEventListener('click', (event) => {
    let flor = event.target.dataset['tipText'];
    console.log(flor)
  });
}
*/






/*
let questionBox = document.querySelectorAll('.item');
for (let question of questionBox) {
  question.onclick = function () {
    if (this.classList.contains('right')) {
      this.style.backgroundColor = 'green';
      return true;
    } else {
      this.style.backgroundColor = 'red';
      return false;
    }
  }
}

    pic.addEventListener('click', (event) => {
      let flor = event.target.dataset['tipText'];
      //console.log(flor)
    });

*/
/*

for (let questionBox of questionBoxs) {
  questionBox.onclick = function () {
    if (questionBox.classList.contains('right')) {
      questionBox.style.backgroundColor = 'green';
      return true;
    } else {
      questionBox.style.backgroundColor = 'red';
      return false;
    }
  }
}

for (let pic of pics) {
  pic.onclick = function() {
    if (pic) {
      this.style.backgroundColor = 'transparent';
      this.style.border = 'none';
      this.textContent = '';
    } else {
      pic.style.backgroundColor = '#fff';
    }
  }
}
*/




