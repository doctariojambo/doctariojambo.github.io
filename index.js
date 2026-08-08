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


const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const submitButton = bookingForm.querySelector(
            'button[type="submit"], input[type="submit"]'
        );

        const nameInput = bookingForm.querySelector(
            'input[name="name"], input[type="text"]'
        );

        const name = nameInput ? nameInput.value.trim() : "there";

        // Prevent double submissions
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.dataset.originalText =
                submitButton.textContent || submitButton.value;

            if (submitButton.tagName === "INPUT") {
                submitButton.value = "Sending...";
            } else {
                submitButton.textContent = "Sending...";
            }
        }

        try {

            const formData = new FormData(bookingForm);

            const response = await fetch(
                "https://formsubmit.co/doctariojambo@gmail.com",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            if (!response.ok) {
                throw new Error("Email submission failed");
            }

            alert(
                "Thank you " +
                name +
                "! Your consultation request has been sent successfully."
            );

            bookingForm.reset();

        } catch (error) {

            console.error("Booking form error:", error);

            alert(
                "Sorry, we couldn't send your consultation request. " +
                "Please try again."
            );

        } finally {

            if (submitButton) {

                submitButton.disabled = false;

                if (submitButton.tagName === "INPUT") {
                    submitButton.value =
                        submitButton.dataset.originalText || "Submit";
                } else {
                    submitButton.textContent =
                        submitButton.dataset.originalText || "Submit";
                }

            }

        }

    });

}
