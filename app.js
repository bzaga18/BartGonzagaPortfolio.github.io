const sidebar = document.getElementById('sidebar');
const bars = document.getElementById('bars');

/* CLICK EVENT TOGGLE NAV */
bars.onclick = function(){
    sidebar.classList.toggle('active');
    bars.classList.toggle('active');
}

/* CLOSE ON CLICK */
document.onclick = function(clickEvent){
    if(clickEvent.target.id !== 'sidebar' && clickEvent.target.id !== 'bars')
        sidebar.classList.remove('active');
        bars.classList.remove('active');
}

