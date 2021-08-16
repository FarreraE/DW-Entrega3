var contactHome = document.getElementById("home__ul--linkContact");
var contactHome1 = document.getElementById("menu__ul--linkContact");
var contactHome2 = document.getElementById("menu__ul--linkContactP");


var elyizuzBtn = document.getElementById("elyizus__elyizuzBtn");
var skilsBtn = document.getElementById("elyizus__skilsBtn");
var timeBtn = document.getElementById("elyizus__timeBtn");
var contactBtn = document.getElementById("elyizus__contactBtn");
var homeMenu = document.getElementById("menu__NavBTN");
var homeMenu2 = document.getElementById("menu__NavBTNP");

contactHome.addEventListener("click", function () { btnSwitch(3) });
contactHome1.addEventListener("click", function () { btnSwitch(3) });
contactHome2.addEventListener("click", function () { btnSwitch(3) });
elyizuzBtn.addEventListener("click", function () { btnSwitch(0) });
skilsBtn.addEventListener("click", function () { btnSwitch(1) });
timeBtn.addEventListener("click", function () { btnSwitch(2) });
contactBtn.addEventListener("click", function () { btnSwitch(3) });

elyizuzBtn.className = "elyizus__nav--buttonSelected";
document.getElementById("elyizus__display--box0").style.display = "block";
document.getElementById("elyizus__footer__main0").style.display = "flex";


homeMenu.addEventListener("click", function () { menuDisplay() });
homeMenu2.addEventListener("click", function () { menuDisplayP() });


function menuDisplay() {
    if (document.getElementById("menu__nav--style").style.opacity == "1") {  
        document.getElementById("menu__nav--style").style.animation = "showUpHI 3s normal 1"
        setTimeout(function () { document.getElementById("menu__nav--style").style.opacity = "0"}, 3000);
    }
    else{
        
        document.getElementById("menu__nav--style").style.animation = "showUpH 3s normal 1";
        setTimeout(function () { document.getElementById("menu__nav--style").style.opacity = "1"}, 3000);
    }

}
function menuDisplayP() {
    if (document.getElementById("menu__nav--styleP").style.opacity == "1") {  
        document.getElementById("menu__nav--styleP").style.animation = "showUpHI 3s normal 1"
        setTimeout(function () { document.getElementById("menu__nav--styleP").style.opacity = "0"}, 3000);
    }
    else{
        
        document.getElementById("menu__nav--styleP").style.animation = "showUpH 3s normal 1";
        setTimeout(function () { document.getElementById("menu__nav--styleP").style.opacity = "1"}, 3000);
    }

}


function btnSwitch(option) {
    elyizuzBtn.className = "elyizus__nav--button";
    skilsBtn.className = "elyizus__nav--button";
    timeBtn.className = "elyizus__nav--button";
    contactBtn.className = "elyizus__nav--button";

    document.getElementById("elyizus__display--box0").style.display = "none";
    document.getElementById("elyizus__display--box1").style.display = "none";
    document.getElementById("elyizus__display--box2").style.display = "none";
    document.getElementById("elyizus__display--box3").style.display = "none";

    document.getElementById("elyizus__footer__main0").style.display = "none";
    document.getElementById("elyizus__footer__main1").style.display = "none";
    document.getElementById("elyizus__footer__main2").style.display = "none";
    document.getElementById("elyizus__footer__main3").style.display = "none";

    switch (option) {
        case 0:
            elyizuzBtn.className = "elyizus__nav--buttonSelected";
            document.getElementById("elyizus__display--box0").style.display = "block";
            document.getElementById("elyizus__footer__main0").style.display = "none";
            blackBg();
            setTimeout(function () { document.getElementById("elyizus__footer__main0").style.display = "flex"; blackBg(); }, 500);
            break;
        case 1:
            skilsBtn.className = "elyizus__nav--buttonSelected";
            document.getElementById("elyizus__display--box1").style.display = "block";
            document.getElementById("elyizus__footer__main1").style.display = "none";
            blackBg();
            setTimeout(function () { document.getElementById("elyizus__footer__main1").style.display = "flex";  blackBg();}, 500);
            break;
        case 2:
            timeBtn.className = "elyizus__nav--buttonSelected";
            document.getElementById("elyizus__display--box2").style.display = "block";
            document.getElementById("elyizus__footer__main2").style.display = "none";
            blackBg();
            setTimeout(function () { document.getElementById("elyizus__footer__main2").style.display = "flex"; blackBg(); }, 500);
            break;
        case 3:
            contactBtn.className = "elyizus__nav--buttonSelected";
            document.getElementById("elyizus__display--box3").style.display = "block";
            document.getElementById("elyizus__footer__main3").style.display = "none";
            blackBg();
            setTimeout(function () { document.getElementById("elyizus__footer__main3").style.display = "flex";  blackBg();}, 500);
            break;
    }
    blackBg();
}

function blackBg() {
    elyizus.style.animation = "blackBackground 0.2s normal 1";
    setTimeout(function () { elyizus.style.animation = ""; }, 200);
}


