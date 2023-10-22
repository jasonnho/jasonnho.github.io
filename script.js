let teks1 = document.getElementById('teks1');
let pKiri = document.getElementById('pkiri');
let pKanan = document.getElementById('pulau-kanan');
let orang = document.getElementById('orang');
let matahari = document.getElementById('matahari');
let gunung1 = document.getElementById('gunung1');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let gunung1MarginTop = Math.min(value * 1.2, 200);
    let teks1MarginTop = Math.min(value * 1.5, 700);
    let orangMarginTop = Math.min(value * 1.5, 580);
    let kiriBatas = Math.max(value * -0.6, -200);

    teks1.style.marginTop = teks1MarginTop + 'px';
    pKiri.style.left = kiriBatas + 'px';
    orang.style.marginTop = orangMarginTop + 'px';
    gunung1.style.marginTop = gunung1MarginTop + 'px';
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidebar = document.getElementById("sidebar");

function openbar(){
    sidebar.style.right = "0";
}

function closebar(){
    sidebar.style.right = "-200px";
}