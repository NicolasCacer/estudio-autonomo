const dashboard = document.getElementById('Dashboard');
const buttonDash = document.getElementById('buttonDashboard');

function toggleDashboard(){
    if (dashboard.classList.contains('w-[200px]')){
        dashboard.classList.toggle('w-[200px]')
        dashboard.classList.toggle('w-[0px]')
    } else {
        dashboard.classList.toggle('w-[0px]')
        dashboard.classList.toggle('w-[200px]')
    }
}