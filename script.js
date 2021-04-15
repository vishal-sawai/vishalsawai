
var loadi = document.getElementById("loading");
var navmenu = document.getElementById("navmenu");
function loadfun() {
    loadi.style.display = 'none';
    navmenu.style.display = 'block';
}


//nav Toggle
var menulist = document.getElementById("menulist");
menulist.style.maxHeight = "0px";
function togglemenu() {
    if (menulist.style.maxHeight == "0px") {
        menulist.style.maxHeight = "130px";
    }
    else {
        menulist.style.maxHeight = "0px";
    }
}

//firebase
var db = firebase.firestore();

document.getElementById('contactForm').addEventListener('submit', storeData);

function storeData(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    db.collection("Messages").doc(name).set({
        email: email,
        message: message
    })
        .then(function () {
            alert('Thank you!  ' + name + ' 🙏');
            document.getElementById('contactForm').reset();
        })
        .catch(function (error) {
            console.error("Error writing doc", error);
        });

}

//Project

SelectAllData();

function SelectAllData() {

    var vi = db.collection("Project");

    vi.get().then((snapshot) => {
        const p = [];
        snapshot.forEach((doc) => {
            const data = doc.data();
            p.push(data);
        });
        p.map((vishal) => {
            var pname = vishal.ProjectName;
            var plink = vishal.ProjectLink;
            var ilink = vishal.Link;
            Add(pname, plink, ilink);

        });
    }).catch((error) => {
        // An error happened.
        alert("Error: " + error);
    });
    var stdNo = 0;

    function Add(pname, plink, ilink) {

        var pimgg = new Image();
        pimgg.src = ilink;

        pimgg.onclick = function () {
            window.location.href = plink;
        };
        var mdiv = document.getElementById("project-imghead");
        var pdiv = document.createElement("div");
        pdiv.setAttribute("id", "pdiv1");
        pdiv.setAttribute("class", "slide-image");

        mdiv.appendChild(pdiv);
        pdiv.appendChild(pimgg);

        var z = document.createElement('h1');
        z.setAttribute("id", "ph");
        z.innerHTML = pname;
        pdiv.appendChild(z);



        // slider code

        const slideImage = document.querySelectorAll(".slide-image");
        const slidesContainer = document.querySelector(".slides-container");
        const nextBtn = document.querySelector(".next-btn");
        const prevBtn = document.querySelector(".prev-btn");

        let numberOfImages = slideImage.length;
        let slidewidth = slideImage[0].clientWidth;
        let currentSlide = 0;

        //    set up the slider

        function init() {

            slideImage.forEach((img, i) => {
                img.style.left = i * 100 + "%";
            });
        }

        init();

        // next button

        nextBtn.addEventListener("click", () => {

            if (currentSlide >= numberOfImages - 1) {
                goToSlide(0);
                return;
            }

            currentSlide++;
            goToSlide(currentSlide);
        });

        prevBtn.addEventListener("click", () => {

            if (currentSlide <= 0 ) {
                goToSlide(numberOfImages - 1);
                return;
            }

            currentSlide--;
            goToSlide(currentSlide);
        });


        function goToSlide(slideNumber) {
            slidesContainer.style.transform = "translateX(-" + slidewidth * slideNumber + "px)";
            
            currentSlide = slideNumber;
        }
          
    }

}


