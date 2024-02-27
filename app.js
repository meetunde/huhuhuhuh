// "use strict";
// let homePts = document.getElementById("home-btn");
// let guestPts = document.getElementById("guest-btn");
// let homeAddPoints1 = document.querySelector(".homeadd-1");
// let homeAddPoints2 = document.querySelector(".homeadd-2");
// let homeAddPoints3 = document.querySelector(".homeadd-3");
// let guestAddPoints1 = document.querySelector(".guestadd-1");
// let guestAddPoints2 = document.querySelector(".guestadd-2");
// let guestAddPoints3 = document.querySelector(".guestadd-3");
// let homeCount = 0;
// let guestCount = 0;
// let newGame = document.getElementById("last");

// function homeAddPoint() {
//   homeCount ++;
//   homePts.innerText = homeCount;
// }
// homeAddPoints1.addEventListener("click", homeAddPoint);

// function homeAddPointss2() {
//   homeCount += 2;
//   homePts.innerText = homeCount;
// }
// homeAddPoints2.addEventListener("click", homeAddPointss2);

// function homeAddPointxs3() {
//   homeCount += 3;
//   homePts.innerText = homeCount;
// }
// homeAddPoints3.addEventListener("click", homeAddPointxs3);

// function guestAddPoints() {
//   guestCount++
//   guestPts.innerText = guestCount;
// }
// guestAddPoints1.addEventListener("click", guestAddPoints);

// function guestAddPointss2() {
//   guestCount += 2 
//   guestPts.innerText = guestCount;
// }
// guestAddPoints2.addEventListener("click", guestAddPointss2);

// function guestAddPointss3() {
//   guestCount += 3
//   guestPts.innerText = guestCount;
// }
// guestAddPoints3.addEventListener("click", guestAddPointss3);

// function defaultScore() {
//     homePts.innerText = 0
//     guestPts.innerText = 0
//      homeCount = 0;
//      guestCount = 0;
// }
// newGame.addEventListener("click", defaultScore);

let homeZero = document.querySelector('#home-btn');
console.log(homeZero);
let guestZero = document.querySelector('#guest-btn');
console.log(guestZero);
let headingLp = document.querySelector('.Jehovah');
console.log(headingLp);
let headingPp = document.querySelector('#last')

function getRandom(){
    let random = Math.ceil(Math.random() *5)
    homeZero.innerText = random
    let randomTwo= Math.ceil(Math.random() *5)
    guestZero.innerText = randomTwo
    console.log(random);
    if (random > randomTwo) {
        headingLp.innerText = 'Home Wins'
        
    }else if(random == randomTwo){
        headingLp.innerText = 'TIE'
    }
    else{
        headingLp.innerText = 'Guest Wins'
    }

}
headingPp.addEventListener('click',getRandom)

