var questions = document.getElementsByClassName("question");
var i;

for(i=0; i < questions.length; i++) {
    questions[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var dispAnswer = this.nextElementSibling;
        if(dispAnswer.style.display === "block") {
            dispAnswer.style.display = "none";
        }
        else {
            dispAnswer.style.display = "block";
        }
    });
}