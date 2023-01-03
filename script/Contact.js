const menu_btn = document.querySelector('.hamburger'); //making hamburger active
const mobile_menu = document.querySelector('.mobile-nav'); //making menubar active


menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');

});


//light mode
function darkmode() {
    var SetTheme = document.body;

    SetTheme.classList.toggle('dark-mode');

    var Theme;

    if (SetTheme.classList.contains('dark-mode')) {
        console.log('Dark mode');
        theme = "DARK";
    } else {
        console.log('light mode');
        theme = 'LIGHT';
    }

    //save to local storage
    localStorage.setItem('PageTheme', JSON.stringify(theme));

}

let GetTheme = JSON.parse(localStorage.getItem('PageTheme'));
console.log(GetTheme);

if (GetTheme === 'DARK') {
    document.body.classList = 'dark-mode';
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

/*Validation*/
function validation() {
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var alphabets = /^[A-Za-z]+$/;
    var isAlphabets = fname.match(alphabets);
    var fnameWork = false;
    var emailWork = false;
    var subjectWork = false;

    if (fname == "") {
        document.getElementById('message').innerHTML = "** Please fill your name";
    } else if (!isAlphabets){
        document.getElementById('message').innerHTML="** Only alphabets are allowed";
    } else {
        fnameWork = true;
    }

    if (email == "") {
        document.getElementById('emailmessage').innerHTML = "** Please enter your email";
       
    } else {
        emailWork = true;
    }
    if (subject == "") {
        document.getElementById('subjectmessage').innerHTML = "** Please fill your subject";
        
    } else if (subject.length > 300) {
        document.getElementById('subjectmessage').innerHTML = "** only 300 words are allow";
        
    }else {
        subjectWork = true;
    }


    return fnameWork && emailWork && subjectWork;
}


