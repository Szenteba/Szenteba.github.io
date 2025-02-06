window.addEventListener('load', function() {
    setTimeout(function() {
        document.body.classList.add('visible'); // Add class to trigger transition
    }, 500);
});

var utolso = "";
function showModal() { 
    document.getElementById("myModal").style.display = "block";
    document.getElementById("myImage").style.width= "40vw";
    document.getElementById("myImage").style.height= "15vh";
    document.getElementById("myImage").style.marginTop = "6%";
}
function closeModal() { 
    document.getElementById("myModal").style.display = "none";
    document.getElementById("myModal2").style.display = "none";
    document.getElementById("myImage").style.width= "22vw";
}

/*---*/
var imgElement = document.getElementById("myImage");
if (imgElement) {
    console.log(imgElement.src);
    console.log("SRC relatív:", imgElement.getAttribute("src")); 
} else {
    console.error("Az elem nem található!");
    };
var imgsrc = imgElement.getAttribute("src");
console.log(imgsrc);
/*---*/

function Close_all() {
    document.getElementById("Kezdőlap").style.display = "none";
    document.getElementById("Aukció").style.display = "none";
    document.getElementById("Limited_edition").style.display = "none";
    document.getElementById("V2").style.display = "none";
    document.getElementById("V3").style.display = "none";
    document.getElementById("V4").style.display = "none";
}

function Display_Main() {
    document.getElementById("Kezdőlap").style.display = "block";
    document.getElementById("Aukció").style.display = "none";
    document.getElementById("Limited_edition").style.display = "none";
}

function Aukció() {
    document.getElementById("Kezdőlap").style.display = "none";
    document.getElementById("Limited_edition").style.display = "none";
    document.getElementById("Aukció").style.display = "block";
}

function Limited_edition() {
        document.getElementById("Kezdőlap").style.display = "none";
    document.getElementById("Aukció").style.display = "none";
    document.getElementById("Limited_edition").style.display = "block";
}

function Nhentai() {
    open(URL('www.youtube.com'));
}

function showModal2() { 
    document.getElementById("myModal2").style.display = "block";
}
/*---*/
function closeModal2() { 
    window.open("https://www.youtube.com/watch?v=oO-gc3Lh-oI", "_blank");
    document.getElementById("myModal2").style.display = "none";
}
var px = 0;
pxh = devicePixelRatio.valueOf(1);
console.log(px)


function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (/mobile/i.test(userAgent)) {
      return "Mobile Device";
    } else if (/tablet/i.test(userAgent)) {
      return "Tablet";
    } else {
      return "Desktop";
    }
  }
  
  console.log(detectDevice());

let width = window.innerWidth;  // Képernyő szélessége (ablak szélessége)
let height = window.innerHeight; // Képernyő magassága (ablak magassága)

console.log('Szélesség: ' + width);
console.log('Magasság: ' + height);



if (width < height && detectDevice() === "Desktop") {
    const szar = document.getElementById("mobileCSS");
    szar.setAttribute("href", "Mobile.css");
    const szar1 = document.getElementById("eltun");
    szar1.style.display="none"
}

