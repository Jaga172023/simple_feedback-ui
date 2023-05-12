const ratingEls = document.querySelectorAll(".rating")
const submitBtnEl = document.getElementById("btn")
const containerEl = document.getElementById("container")

let selectedRating = "";


ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
        // console.log("Rating Elements Clicked !!");
        removeActive();

        selectedRating = event.target.innerText || event.target.parentNode.innerText;

        console.log(event.target.innerText || event.target.parentNode.innerText);
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active")
    })
}

function submitReview() {
    // console.log("Submit Btn Clicked !!");
    console.log("Rating Element got Activated !!");
}

submitBtnEl.addEventListener("click", () => {
    if (selectedRating !== "") {
        containerEl.innerHTML = `
        <strong>Thanks You !!</strong><br><br>
        <strong>Feedback : ${selectedRating}</strong><br>
        <p>We'll use you feedback to improve our services</p>
        <p>Have a Great Day!!</p>
        `



    //     if (selectedRating == "Unhappy") {
    //     containerEl.innerHTML = `
    //     <strong>Thanks You !!</strong><br><br>
    //     <strong>Feedback : ${selectedRating}</strong><br>
    //     <p>Sorry to hear that, We'll use your feedback and give better services next time.</p>
    //     <p>have a Great Day!!</p>
    //     `
    // } 
    // else if (selectedRating == "Nuetral") {
    //     containerEl.innerHTML = `
    //     <strong>Thanks You !!</strong><br><br>
    //     <strong>Feedback : ${selectedRating}</strong><br>
    //     <p>Uh oh.. We missed to excite you this time. We definitely surprise you next time..</p>
    //     <p>We hope you visit again!!</p>
    //     `
    // }
    }
})