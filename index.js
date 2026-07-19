// ===============================
// MOBILE MENU
// ===============================

function toggleMenu(){

    let nav = document.getElementById("nav");

    nav.classList.toggle("active");

}


// CLOSE MENU AFTER CLICKING A SECTION LINK

document.querySelectorAll("#nav a").forEach(link => {

    link.addEventListener("click", function(){

        let nav = document.getElementById("nav");

        nav.classList.remove("active");

    });

});




// ===============================
// DARK / LIGHT MODE
// ===============================

function toggleTheme(){

    document.body.classList.toggle("light");

}





// ===============================
// SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});


document.querySelectorAll(".fade")
.forEach(element=>{

    observer.observe(element);

});





// ===============================
// BOOKING FORM
// ===============================

let bookingForm = document.getElementById("bookingForm");


if(bookingForm){

    bookingForm.addEventListener("submit",function(e){

        e.preventDefault();


        let name = this.querySelector("input").value;


        alert(
            "Thank you " + name +
            "! Your consultation request has been received."
        );


        this.reset();

    });

}