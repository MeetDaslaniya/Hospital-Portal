function sidebaractive(value) {
    var Dashboard = document.getElementById("Dashboard");
    Dashboard.classList.remove("active");
    var Patients = document.getElementById("Patients");
    Patients.classList.remove("active");
    var Appointments = document.getElementById("Appointments");
    Appointments.classList.remove("active");
    var Doctors = document.getElementById("Doctors");
    Doctors.classList.remove("active");
    var element = document.getElementById("Messages");
    Messages.classList.remove("active");
    var Education = document.getElementById("Education Content");
    Education.classList.remove("active");
    var Medicine = document.getElementById("Medicine Inventory");
    Medicine.classList.remove("active");
    var Settings = document.getElementById("Settings");
    Settings.classList.remove("active");

    var selected = document.getElementById(value);
    selected.classList.add('active');
}
let dounut = document.getElementById('myDoughnutChart')
if(dounut)
{
    var ctx = dounut.getContext('2d');
    var myDoughnutChart =
     new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                label: 'Top Medicines Sold',
                data: [12, 25, 8, 55],
                backgroundColor: [
    
                    'rgba(78, 229, 120, 1)',
                    'rgba(161, 86, 255, 1)',
                    'rgba(255, 238, 85, 1)',
                    'rgba(52, 151, 249, 1)'
                ],
                borderWidth: 1,
                cutout: 30,
                rotation: 45,
    
            }]
        },
        options: {
            
            scales: {
                display: true,
            },
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    });

}

var bandhkaro=document.getElementById("bandhkaro");

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn[0].onclick = function() {
  modal.style.display = "block";
}
btn[1].onclick = function() {
  modal.style.display = "block";
}
btn[2].onclick = function() {
  modal.style.display = "block";
}
btn[3].onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

bandhkaro.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// var msgButton=document.getElementById("msgButton");

// var msgModel=document.getElementById("msgModal")


// function displayblock(){
//     msgModel.style.display="block";
//     console.log("1252")
// }

// msgButton?.addEventListener('click',()=>{
//     // msgModel.style.display = "block";
//     console.log("65615")
// })

