const form = document.querySelector("#booking-form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const result = document.querySelector("#result");
        result.textContent = "Tack! Din bokningsförfrågan har skickats.";
    });
}
