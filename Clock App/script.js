
function updateClock() {

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const date = now.toDateString();
    const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;


    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = date;
}


setInterval(updateClock, 1000);
updateClock(); 
