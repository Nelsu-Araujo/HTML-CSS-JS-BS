
// A chamar a função
setInterval(showTime, 1000);

// Definir a função para mostrar as horas
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "am";

    // Condicional para definir o formato da hora (12h)
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "pm";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "am";
    }

    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        am_pm;

    // Hora
    document.querySelector(
        "#clock"
    ).innerHTML = currentTime;
}

showTime();



const getCurrentTimeDate = () => {
    let currentTimeDate = new Date();

    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";



    var currentDate = currentTimeDate.getDate();
    var currentMonth = month[currentTimeDate.getMonth()];
    var CurrentYear = currentTimeDate.getFullYear();

    var fullDate = `${currentDate} ${currentMonth} ${CurrentYear}`;

    document.getElementById("date").innerHTML = fullDate;

    setTimeout(getCurrentTimeDate, 500);

}
getCurrentTimeDate();


// Selecionar o botão
let mybutton = document.getElementById("myBtn");

// Função para o botão aparecer com o scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Função para voltar ao topo após o clique no botão
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

// Prevent Default e Função para mostrar mensagem de agradecimento no formulário
const form = document.getElementById("form-send");

if (form!==null) {
    form.addEventListener('submit', function(e) {
        e.preventDefault()

        displaySuccessMessage();
    });

    function displaySuccessMessage() {
        form.innerHTML = '<div class="success-message"><p>Form successfully submitted! <i class="fa-solid fa-check" style="color: #009903;"></i></p><p>Thank you for getting in touch!</p></div>';
    }
}

