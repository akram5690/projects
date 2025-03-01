//   click src icon show the searchbar
function toggleSrc() {
    let srcbar = document.querySelector(".src");
    srcbar.classList.toggle("src1");
}

//  using for mobile-nav
function toggleNav() {
    let mobile = document.querySelector(".undorder");
    mobile.classList.toggle("undorder2")
}





// // Change the style of the div according to the window
// const fourtDiv = document.querySelector(".div4"); //(ver and let not work) so used cont method
// function upDiv4() {
//     if (window.innerWidth <= 1300) {
//         fourtDiv.style.display = "none"; //Will show if screen is smaller than 1300
//     } else {
//         fourtDiv.style.display = "flex"; // Will show if the screen is larger than 1300
//     }
// }
// upDiv4();// call the function
// window.addEventListener("resize", upDiv4);// Update visibility on window resize using addeventlistener methode

// const showBtn = document.querySelectorAll(".show-btn"); //use also const
//     //   use toggle method click the button to div display flex and none property
// function toggleDiv4() {
//     showBtn.forEach(showDiv => {

//         if (showDiv.style.display == "none") {
//             showDiv.style.display = "flex";   //div4 display flex   
//         } else {
//             showDiv.style.display = "none";   //div4 display none 

//         }
//     });
// }


// showBtn.addEventListener("click", toggleDiv4); // Add event listener to the button for toggling div4 



// const thirdDiv = document.querySelector(".div3");
// function upDiv3() {
//     if (window.innerWidth <= 910) {
//         thirdDiv.style.display = "none";
//     } else {
//         thirdDiv.style.display = "flex";

//     }
// }

// upDiv3()
// window.addEventListener("resize", upDiv3);

// function toggleDiv3() {
//     showBtn.forEach(showDiv2 => {

//     });
//     if (showDiv2.style.display == "none") {
//         showDiv2.style.display ="flex";        
//     } else {
//         showDiv2.style.display ="none";        
//     }    
// }

// //   showBtn veriable assign fourtDiv do not over right
// showBtn.addEventListener("click", toggleDiv3);



// function upDiv2() {
//     const secondDiv = document.querySelector(".div2");
//     if (window.innerWidth <= 490) {
//         secondDiv.style.display = "none";
//     } else {
//         secondDiv.style.display = "flex";
//     }
// }

// upDiv2()
// window.addEventListener("resize", upDiv2);

// function toggleDiv2() {
//     showBtn.forEach(showDiv3 => {

//     });
//     if (showDiv3.style.display == "none") {
//         showDiv3.style.display = "flex";
//     } else {
//         showDiv3.style.display = "none";
//     }   
// }

// //   showBtn veriable assign fourtDiv do not over right
// showBtn.addEventListener("click", toggleDiv2);

const div4s = document.querySelectorAll(".div4");
const div3s = document.querySelectorAll(".div3");
const div2s = document.querySelectorAll(".div2");

const buttons = document.querySelectorAll(".winter-btn");



function toggleDiv4() {
    div4s.forEach(div4 => {
        console.log(1222);
    div4.style.display = (div4.style.display == "none" || div4.style.display == "") ? "flex" : "none";
    });
    div3s.forEach(div3 => {
        console.log(33333);
        div3.style.display = (div3.style.display == "none" || div3.style.display == "") ? "flex" : "none";
    });
    div2s.forEach(div2 => {
        console.log(4444);
        div2.style.display = (div2.style.display == "none" || div2.style.display == "") ? "flex" : "none";
    });
}
buttons.forEach(btn => {
    btn.addEventListener("click", toggleDiv4)
});  


function resizeWindow() {
    
    div4s.forEach(div4 => {
        div4.style.display = window.innerWidth <= 1300 ? "none" : "flex";
    });

    div3s.forEach(div3 => {
        div3.style.display = window.innerWidth <= 910 ? "none" : "flex";
    });

    div2s.forEach(div2 => {
        div2.style.display = window.innerWidth <= 490 ? "none" : "flex";
    });
}
resizeWindow()
window.addEventListener("resize", resizeWindow);





// click viwe button to show more wintercollection
function toggle() {


    let more = document.querySelectorAll(".add");
    for (let i = 0; i < more.length; i++) {
        more[i].classList.toggle("add2");

    }

}
// click viwe button to show more summercollection
function toggleSummer() {


    let more = document.querySelectorAll(".sadd");
    for (let i = 0; i < more.length; i++) {
        more[i].classList.toggle("sadd2");
    }

}

