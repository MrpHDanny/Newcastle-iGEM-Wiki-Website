var weekbuttons = document.querySelectorAll(".weekbtn");
var weekcontents = document.querySelectorAll(".weekcontent");

var daybuttons = document.querySelectorAll(".daybtn");
var daycontents = document.querySelectorAll(".daycontent");

// week buttons event listeners
for(let i = 0; i < weekbuttons.length; i++){
    weekbuttons[i].addEventListener("click", function(){
        toggle(weekcontents, i);
        toggleActive(weekbuttons, i);
    })
}
// day buttons event listeners
for(let i = 0; i < daybuttons.length; i++){
    daybuttons[i].addEventListener("click", function(){
        toggleActive(daybuttons, i); 
    })
}

// toggle visibility
function toggle(obj, num) {
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].classList.contains("visible")) {
            obj[i].classList.toggle("visible")
        }
    }
    obj[num].classList.toggle("visible")
}

// toggle active element
function toggleActive(obj, num){
    for (let i = 0; i < obj.length; i++){
        if(obj[i].classList.contains("active")){
            obj[i].classList.toggle("active")
        }
    }
    obj[num].classList.toggle("active");

}
