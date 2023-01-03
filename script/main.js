const menu_btn = document.querySelector('.hamburger'); //making hamburger active
const mobile_menu = document.querySelector('.mobile-nav'); //making menubar active


menu_btn.addEventListener('click', function (){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    
});


//light mode
function darkmode(){
    var SetTheme = document.body;
    
    SetTheme.classList.toggle('dark-mode');

    var Theme;

    if(SetTheme.classList.contains('dark-mode')){
        console.log('Dark mode');
        theme = "DARK";
    }else {
        console.log('light mode');
        theme = 'LIGHT';
    }
 
    //save to local storage
    localStorage.setItem('PageTheme', JSON.stringify(theme));
    
}

let GetTheme = JSON.parse(localStorage.getItem('PageTheme'));
console.log(GetTheme);

if(GetTheme === 'DARK'){
    document.body.classList = 'dark-mode';
}

